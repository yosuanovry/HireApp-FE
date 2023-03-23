import { combineReducers } from "redux";
import user from "./user";
import regristerPerekrut from "./regristerPerekrut";


const rootReducers = combineReducers({
  user, regristerPerekrut
 
});

export default rootReducers;
