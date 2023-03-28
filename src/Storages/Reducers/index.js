import { combineReducers } from "redux";
import registerUser from "./register";
import userLogin from "./login";
import get_profileCorp from "./getProfileCorporate";
import update_profileCorp from "./putProfileCorporate";
import get_profileWorkers from "./getProfileWorkers";
import add_skill from "./addSkillWorkers";
import put_profile from "./putProfileWorkers";
import get_skillWorkers from "./getSkillWorkers";
import put_profileWorkers from "./putProfileWorkers";
import get_experienceWorkers from "./getExperienceWorkers";
import delete_experience from "./deleteExperience";
import put_experience from "./putExperience";
import add_portofolio from "./addPortofolioWorkers";
import userPekerja from "./getUserPekerja"

const rootReducers = combineReducers({
  registerUser,
  userLogin,
  get_profileCorp,
  update_profileCorp,
  add_skill,
  get_profileWorkers,
  put_profile,
  get_skillWorkers,
  put_profileWorkers,
  get_experienceWorkers,
  delete_experience,
  put_experience,
  add_portofolio,
  userPekerja
});

export default rootReducers;
