import axios from "axios";

export const getProfileCorporate = (navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-perekrut");
    let headers = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      };
      dispatch({ type: "GET_PROFILE_PENDING" });
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/company`,
        headers
      );
      const corporate = result.data.data;
    dispatch({ type: "GET_PROFILE_SUCCESS", payload:corporate });
  } catch (err) {
    dispatch({
      type: `GET_PROFILE_CORPORATE_FAILED`,
      payload: err.message,
    });
    console.log("get profile corp error");
    console.log(err);
  }
};

export const putProfileCorporate = (data, navigate) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) navigate("/auth/login-perekrut");
    let headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: "UPDATE_PROFILE_CORPORATE_PENDING" });
    const result = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/company/editProfile`,
      data,
      headers
    );
    const updateProfile = result.data;
    dispatch({
      type: "UPDATE_PROFILE_CORPORATE_SUCCESS",
      payload: updateProfile,
    });
    window.location.reload(false)
    navigate("/edit/profile-corporate");
  } catch (err) {
    console.log("update profile corp error");
    console.log(err);
  }
};