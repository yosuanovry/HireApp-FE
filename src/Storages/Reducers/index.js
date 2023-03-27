import { combineReducers } from "redux";
import registerUser from "./register";
import userLogin from "./login";
import send_Email from "./sendEmail"
import send_Otp from "./sendOtp"
import send_ConfirmPassword from "./sendConfirmPassword"
import get_UserPerekrut from "./getUserPerekrut"

const rootReducers = combineReducers({
 registerUser, 
 userLogin, 
 send_Email, 
 send_Otp, 
 send_ConfirmPassword,
 get_UserPerekrut
 
});

export default rootReducers;
