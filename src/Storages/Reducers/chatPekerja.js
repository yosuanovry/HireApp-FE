const initialState = {
    data: null,
    isLoading: false,
  };
  
  const chat_pekerja = (state = initialState, action) => {
    if (action.type === "CHAT_PENDING") {
      return {
        ...state,
        isLoading: true,
      };
    } else if (action.type === "CHAT_SUCCESS") {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    } else if (action.type === "CHAT_FAILED") {
      return {
        ...state,
        errorMessage: action.payload,
        isLoading: false,
      };
    } else {
      return state;
    }
  };
  
  export default chat_pekerja;
  