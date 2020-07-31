import React, { Component } from "react";

class UserReposListItem extends Component {
  state = {};
  render() {
    return (
      <div className="row mx-0 my-2 py-3 RepoComponent">
        <div className="cols col-12">
          <div className="row mx-0">
            <div className="cols col-8 RepoComponent__description">
              <h2>{this.props.repo.name}</h2>
            </div>
            <div className="cols col-4 RepoComponent__stars text-right">
              {this.props.repo.stargazers_count}
              <i data-id="1" className="zmdi zmdi-star ml-2"></i>
            </div>
          </div>
          <div className="row mx-0">
            <div className="cols col-12 RepoComponent__name">
              {this.props.repo.description
                ? this.props.repo.description
                : "No description available"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserReposListItem;
