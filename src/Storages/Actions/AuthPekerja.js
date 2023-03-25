import axios from "axios";

export const registerUserPekerja = (data,navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}users/register`,
      data
    );
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/auth/login-pekerja");
  } catch (err) {
    console.log("registerUser error");
    console.log(err);
  }
};

export const loginUserPekerja = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}users/login`,
      data
    );
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/edit/profile-workers");
    // navigate("/login");
  } catch (err) {
    console.log("loginUser error");
    console.log(err);
  }
};

