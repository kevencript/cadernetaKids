import { combineReducers } from "redux";
import authReducer from "./authReducer";
import childProfileReducer from "./childProfileReducer";

export default combineReducers({
  auth: authReducer,
  childProfile: childProfileReducer
});
