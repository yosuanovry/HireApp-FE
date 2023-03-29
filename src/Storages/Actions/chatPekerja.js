import axios from "axios";

export const chatPekerja = (id, data, navigate) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) navigate("/auth/login-pekerja");
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({ type: "CHAT_PENDING" });
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/chat/${id}`,
        data,
        headers
      );
      const payload = result.data;
      dispatch({ type: "CHAT_SUCCESS", payload });
      navigate("/chat-workers")
    } catch (err) {
      dispatch({
        type: `CHAT_FAILED`,
        payload: err.message,
      });
      console.log("Chat Error");
      console.log(err);
    }
  };

  export const getChatPekerja = (navigate) => async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) navigate("/auth/login-pekerja");
      let headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({ type: "CHAT_PENDING" });
      const result = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/chat/myChat`,
        headers
      );
      const payload = result.data;
      dispatch({ type: "CHAT_SUCCESS", payload });
    } catch (err) {
      dispatch({
        type: `CHAT_FAILED`,
        payload: err.message,
      });
      console.log("Chat Error");
      console.log(err);
    }
  };

