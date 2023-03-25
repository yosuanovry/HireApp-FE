import axios from "axios";

export const sendEmail = (data,navigate) => async (dispatch) => {
    try {
      dispatch({ type: "GET_EMAIL_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/otp`,
        data
      );
      const user = result.data.data;
      dispatch({ type: "GET_EMAIL_SUCCESS", payload: user });
      navigate("/auth/send-otp");
    } catch (err) {
      console.log("sendEmail error");
      console.log(err);
    }
  };

  export const sendOtp = (data,navigate) => async (dispatch) => {
    try {
      dispatch({ type: "SEND_OTP_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/otp/confirm`,
        data
      );
      const user = result.data.data;
      dispatch({ type: "SEND_OTP_SUCCESS", payload: user });
      navigate("/auth/confirm-password");
    } catch (err) {
      console.log("sendOtp error");
      console.log(err);
    }
  };

  export const confirm_Password = (data,navigate) => async (dispatch) => {
    try {
      dispatch({ type: "CONFIRM_PASSWORD_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/reset`,
        data
      );
      const user = result.data.data;
      dispatch({ type: "CONFIRM_PASSWORD_SUCCESS", payload: user });
      navigate("/home");
    } catch (err) {
      console.log("confirmPassword error");
      console.log(err);
    }
  };