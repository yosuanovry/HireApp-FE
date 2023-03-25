import axios from "axios";

export const registerUserPerekrut = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(`https://a9cf6e4c-8b41-40bb-95ae-15cf5eeda288.mock.pstmn.io/register`, data);
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    // navigate("/login");
  } catch (err) {
    console.log("registerUser error");
    console.log(err);
  }
};

export const loginUserPerekrut = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/login`,
      data
    );
    const user = result.data.data;
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    // navigate("/login");
  } catch (err) {
    console.log("loginUser error");
    console.log(err);
  }
};

