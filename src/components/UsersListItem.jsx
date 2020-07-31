import React, { Component } from "react";
import { connect } from "react-redux";

class UsersListItem extends Component {
  state = {};
  render() {
    return <div className="cols col-sm-12">{this.props.user.login}</div>;
  }
}

export default UsersListItem;
