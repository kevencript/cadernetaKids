import { combineReducers } from "redux";
import authReducer from "./authReducer";
import childProfileReducer from "./childProfileReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
  auth: authReducer,
  childProfile: childProfileReducer,
  alert: alertReducer
});
