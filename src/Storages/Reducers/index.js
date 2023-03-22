import { combineReducers } from "redux";
import user from "./user";
import registerUser from "./register";
import userLogin from "./login";

const rootReducers = combineReducers({
  user, registerUser, userLogin
 
});

export default rootReducers;
