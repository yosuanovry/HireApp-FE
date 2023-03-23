import { combineReducers } from "redux";
import user from "./user";
<<<<<<< HEAD
import regristerPerekrut from "./regristerPerekrut";


const rootReducers = combineReducers({
  user, regristerPerekrut
=======
import registerUser from "./register";
import userLogin from "./login";

const rootReducers = combineReducers({
  user, registerUser, userLogin
>>>>>>> 172106a1b9c04c75968e8d3df83fe6bcc130b039
 
});

export default rootReducers;
