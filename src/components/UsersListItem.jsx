import React, { Component } from "react";
import axios from "axios";
import UserReposListItem from "./UserReposListItem";

class UsersListItem extends Component {
  state = {
    userRepos: [],
    collapsed: true,
  };

  componentDidMount() {
    let apiUrl = `https://api.github.com/users/${this.props.user.login}/repos?access_token=f5135b9e23ac655664d3ab97d09be5e209c4c85c`;

    axios({
      method: "get",
      url: apiUrl,
      headers: {},
    })
      .then((res) => {
        this.setState({ userRepos: res.data });
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.warn(errorMsg);
      });
  }

  handleCollaps = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    return (
      <div className="cols col-12 my-1">
        <div className="row mx-0">
          <div
            className={
              this.state.collapsed
                ? "cols col-12 reposContainer__handler collapsed"
                : "cols col-12 reposContainer__handler"
            }
            onClick={(event) => {
              this.handleCollaps();
            }}
          >
            <div className="row mx-0">
              <div className="cols col-8">{this.props.user.login}</div>
              <div className="cols col-4 text-right align-middle">
                <i data-id="1" className="zmdi zmdi-chevron-down"></i>
                <i data-id="1" className="zmdi zmdi-chevron-up"></i>
              </div>
            </div>
          </div>
          <div
            className={
              this.state.collapsed
                ? "cols col-12 reposContainer collapsed"
                : "cols col-12 reposContainer"
            }
          >
            {this.state.userRepos.map((repo, id) => {
              return (
                <UserReposListItem key={`userReposListItem${id}`} repo={repo} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UsersListItem;
