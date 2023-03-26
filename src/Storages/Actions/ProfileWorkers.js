import axios from "axios";

export const getProfileWorkers = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_PROFILE_WORKERS_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/pekerja/myProfile`,
      headers
    );
    const workers = result.data.data;
    dispatch({ type: "GET_PROFILE_WORKERS_SUCCESS", payload: workers });
  } catch (err) {
    dispatch({
      type: `GET_PROFILE_WORKERS_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("get profile corp error");
    console.log(err);
  }
};

export const addSkill = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "ADD_SKILL_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/skill`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "ADD_SKILL_SUCCESS", payload });
    navigate("/edit/profile-workers");
  } catch (error) {
    dispatch({ type: `ADD_SKILL_ERROR`, payload: error.respons.data.message });
    console.log("Add Skill Error");
    console.log(error);
  }
};

export const addExperience = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "ADD_EXPERIENCE_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/experience`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "ADD_EXPERIENCE_SUCCESS", payload });
    navigate("/edit/profile-workers");
  } catch (error) {
    dispatch({
      type: `ADD_EXPERIENCE_ERROR`,
      payload: error.respons.data.message,
    });
    console.log("Add Experience Error");
    console.log(error);
  }
};