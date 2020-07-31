import {
  FETCH_USERS_LIST_REQUEST,
  FETCH_USERS_LIST_SUCCESS,
  FETCH_USERS_LIST_FAILURE,
} from "./userTypes";

const initialState = {
  users: [],
  userRepos: [],
  loadingUsers: false,
  dataFetched: false,
  errorApiUsers: "",
};

const offerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_LIST_REQUEST:
      return {
        ...state,
        dataFetched: false,
        loadingUsers: true,
      };
    case FETCH_USERS_LIST_SUCCESS:
      return {
        ...state,
        dataFetched: true,
        loadingUsers: false,
        users: action.payload,
        errorApiUsers: "",
      };
    case FETCH_USERS_LIST_FAILURE:
      return {
        ...state,
        dataFetched: true,
        loadingUsers: false,
        users: [],
        errorApiUsers: action.payload,
      };

    default:
      return state;
  }
};

export default offerReducer;
