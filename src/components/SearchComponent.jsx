import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsersListData } from "../redux";

class SearchComponent extends Component {
  state = {
    userName: "Enter username",
  };

  updateUserName = (e) => {
    this.setState({ userName: e.target.value });
  };

  searchUsers = () => {
    let apiUrl = `https://api.github.com/search/users?q=${this.state.userName}&per_page=100`;
    console.log("apiUrl", apiUrl);
    this.props.fetchUsersListData(apiUrl, this.state.userName);
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
