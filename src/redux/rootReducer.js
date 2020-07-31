import { combineReducers } from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
