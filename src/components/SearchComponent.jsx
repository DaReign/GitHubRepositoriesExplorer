import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersListData } from "../redux";
import dog from "../assets/img/DOG.jpg";

class SearchComponent extends Component {
  state = {
    userName: "Enter username",
    querySended: false,
  };

  updateUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  searchUsers = () => {
    let apiUrl = `https://api.github.com/search/users?q=${this.state.userName}&per_page=100&access_token=f5135b9e23ac655664d3ab97d09be5e209c4c85c`;
    this.props.fetchUsersListData(apiUrl, this.state.userName);
  };

  showInfo = () => {
    if (this.props.userGeneralData.users.length > 0) {
      return (
        <div className="row">
          <div className="col col-sm-12 my-2 SearchComponent__resultInfo">
            Showing users for {this.state.userName}
          </div>
        </div>
      );
    } else if (this.props.userGeneralData.dataFetched) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="cols col-sm-12 text-center my-5">
              <img src={dog} alt="loading" />
            </div>
          </div>
          <div className="row">
            <div className="cols col-sm-12 text-center my-5">
              <h2>Sorry boss nothing found!</h2>
              <h3>Wuf wuf throw me the ball!</h3>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container-fluid SearchComponent">
        <div className="row">
          <div className="col col-sm-12">
            <input
              className="SearchComponent__input"
              placeholder="Enter username"
              type="text"
              onChange={(event) => {
                this.updateUserName(event);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12">
            <button
              type="button"
              className="btn btn-primary SearchComponent__button"
              onClick={() => {
                this.searchUsers();
              }}
            >
              Search
            </button>
          </div>
        </div>
        {this.showInfo()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userGeneralData: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersListData: (apiUrl, userName) =>
      dispatch(fetchUsersListData(apiUrl, userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
