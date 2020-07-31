import axios from "axios";
import {
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
} from "./userTypes";

export const fetchUsersListRequest = () => {
  return {
    type: FETCH_USERS_LIST_REQUEST,
  };
};

export const fetchUsersListSuccess = (data) => {
  return {
    type: FETCH_USERS_LIST_SUCCESS,
    payload: data,
  };
};

export const fetchUsersListFailure = (error) => {
  return {
    type: FETCH_USERS_LIST_FAILURE,
    payload: error,
  };
};

export const fetchUsersListData = (apiUrl, userName) => {
  return (dispatch) => {
    dispatch(fetchUsersListRequest());
    axios({
      method: "get",
      url: apiUrl,
      headers: {},
    })
      .then((res) => {
        // filter by user login containing query keyword
        let users = res.data.items.filter((user) => {
          return user.login.toUpperCase().indexOf(userName.toUpperCase()) > -1;
        });
        dispatch(fetchUsersListSuccess(users.slice(0, 5)));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersListFailure(errorMsg));
      });
  };
};
