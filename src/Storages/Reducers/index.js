import { combineReducers } from "redux";
import registerUser from "./register";
import userLogin from "./login";

const rootReducers = combineReducers({
 registerUser, userLogin
 
});

export default rootReducers;
