import React, { Component } from "react";
import UsersListItem from "./UsersListItem";
import { connect } from "react-redux";
import loading from "../assets/img/loadingLiquid.gif";

class UsersList extends Component {
  state = {};
  render() {
    if (this.props.userGeneralData.loadingUsers) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="cols col-sm-12 text-center my-5">
              <img src={loading} alt="loading" />
            </div>
          </div>
        </div>
      );
    } else {
      if (this.props.userGeneralData.users) {
        return (
          <div className="container-fluid">
            <div className="row">
              {this.props.userGeneralData.users.map((user, id) => {
                return <UsersListItem key={`userList${id}`} user={user} />;
              })}
            </div>
          </div>
        );
      } else {
        return <p>No data</p>;
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userGeneralData: state.userReducer,
  };
};

export default connect(mapStateToProps, null)(UsersList);
