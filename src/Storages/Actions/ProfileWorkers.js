import axios from "axios";

export const getProfileWorkers = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_PROFILE_WORKERS_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/pekerja/myProfile`,
      headers
    );
    const get_ProfileWork = result.data.data;
    dispatch({
      type: "GET_PROFILE_WORKERS_SUCCESS",
      payload: get_ProfileWork,
    });
  } catch (err) {
    dispatch({
      type: `GET_PROFILE_WORKERS_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("get profile error");
    console.log(err);
  }
};

export const getSkillWorkers = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_SKILL_WORKERS_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/skill/mySkill`,
      headers
    );
    const get_SkillWorkers = result.data.data;
    dispatch({ type: "GET_SKILL_WORKERS_SUCCESS", payload: get_SkillWorkers });
  } catch (err) {
    dispatch({
      type: `GET_SKILL_WORKERS_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("get profile corp error");
    console.log(err);
  }
};

export const getExperienceWorkers = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_EXPERIENCE_WORKERS_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/experience/myExperience`,
      headers
    );
    const get_ExperienceWorkers = result.data.data;
    dispatch({
      type: "GET_EXPERIENCE_WORKERS_SUCCESS",
      payload: get_ExperienceWorkers,
    });
  } catch (err) {
    dispatch({
      type: `GET_EXPERIENCE_WORKERS_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("get profile corp error");
    console.log(err);
  }
};

export const putProfileWorkers = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "UPDATE_PROFILE_PENDING" });
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/pekerja`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload });
    // navigate("/edit/detail-profile-workers");
  } catch (err) {
    dispatch({
      type: `UPDATE_PROFILE_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("update profile Error");
    console.log(err);
  }
};

export const addSkill = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "ADD_SKILL_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/skill/`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "ADD_SKILL_SUCCESS", payload });
    navigate("/edit/profile-workers");
  } catch (err) {
    dispatch({
      type: `ADD_SKILL_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("Add Skill Error");
    console.log(err);
  }
};

export const addExperience = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
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
export const editExperience = (id,data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "UPDATE_EXPERIENCE_PENDING" });
    const result = axios.put(
      `${process.env.REACT_APP_BASE_URL}/experience/update/${id}`,data,
      headers
    );
    const update_ExperienceWorkers = result.data;
    dispatch({
      type: "UPDATE_EXPERIENCE_SUCCESS",
      payload: update_ExperienceWorkers,
    });
    navigate("/edit/detail-profile-workers");
  } catch (error) {
    dispatch({
      type: "UPDATE_EXPERIENCE_FAILED",
      payload: error.response.data.message,
    });
    console.log("UPDATE EXPERIENCE ERROR");
    console.log(error);
  }
};
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "DELETE_EXPERIENCE_PENDING" });
    const result = axios.delete(
      `${process.env.REACT_APP_BASE_URL}/experience/delete/${id}`,
      headers
    );
    const delete_ExperienceWorkers = result.data;
    dispatch({
      type: "DELETE_EXPERIENCE_SUCCESS",
      payload: delete_ExperienceWorkers,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_EXPERIENCE_FAILED",
      payload: error.response.data.message,
    });
    console.log("DELETE EXPERIENCE ERROR");
    console.log(error);
  }
};

export const addPortofolio = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "ADD_PORTOFOLIO_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/portofolio`,
      data,
      headers
    );
    const payload = result.data;
    dispatch({ type: "ADD_PORTOFOLIO_SUCCESS", payload });
    navigate("/edit/profile-workers");
  } catch (err) {
    dispatch({
      type: `ADD_PORTOFOLIO_ERROR`,
      payload: err.message,
    });
    console.log("Add portofolio Error");
    console.log(err);
  }
};
export const getPortofolioWorkers = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "GET_PORTOFOLIO_WORKERS_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/portofolio/myPortofolio`,
      headers
    );
    const get_ExperienceWorkers = result.data.data;
    dispatch({
      type: "GET_PORTOFOLIO_WORKERS_SUCCESS",
      payload: get_ExperienceWorkers,
    });
  } catch (err) {
    dispatch({
      type: `GET_PORTOFOLIO_WORKERS_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("get porto error");
    console.log(err);
  }
};
export const deletePortofolio = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "DELETE_PORTOFOLIO_PENDING" });
    const result = axios.delete(
      `${process.env.REACT_APP_BASE_URL}/portofolio/delete/${id}`,
      headers
    );
    const delete_PortofolioWorkers = result.data;
    dispatch({
      type: "DELETE_PORTOFOLIO_SUCCESS",
      payload: delete_PortofolioWorkers,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PORTOFOLIO_FAILED",
      payload: error.response.data.message,
    });
    console.log("DELETE PORTOFOLIO ERROR");
    console.log(error);
  }
};
export const editPortofolio = (id, data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-pekerja");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "UPDATE_PORTOFOLIO_PENDING" });
    const result = axios.put(
      `${process.env.REACT_APP_BASE_URL}/portofolio/update/${id}`,
      data,
      headers
    );
    const update_PortofolioWorkers = result.data;
    dispatch({
      type: "UPDATE_PORTOFOLIO_SUCCESS",
      payload: update_PortofolioWorkers,
    });
    // navigate("/edit/detail-profile-workers");
  } catch (error) {
    dispatch({
      type: "UPDATE_EXPERIENCE_FAILED",
      payload: error.response.data.message,
    });
    console.log("UPDATE PORTOFOLIO ERROR");
    console.log(error);
  }
};