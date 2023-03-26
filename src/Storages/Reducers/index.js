import { combineReducers } from "redux";
import registerUser from "./register";
import userLogin from "./login";
import get_profileCorp from "./getProfileCorporate";
import update_profileCorp from "./putProfileCorporate";
import get_profileWork from "./getProfileWorkers";
import add_skill from "./addSkillWorkers";

const rootReducers = combineReducers({
  registerUser,
  userLogin,
  get_profileCorp,
  update_profileCorp,
  get_profileWork,
  add_skill
});

export default rootReducers;
