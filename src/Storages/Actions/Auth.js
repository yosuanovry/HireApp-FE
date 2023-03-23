import axios from "axios";

export const regristerPerekrut = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/auth/register`,
      data
    );
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/auth/login");
  } catch (err) {
    dispatch({
      type: `USER_REGISTER_FAILED`,
      payload: err.respons.data.message,
    });
    console.log("loginUser error");
    console.log(err);
  }
};
