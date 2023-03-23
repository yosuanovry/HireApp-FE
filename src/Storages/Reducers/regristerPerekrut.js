const initialState = {
  data: null,
  isLoading: false,
};

const perekrut_regris = (state = initialState, action) => {
  if (action.type === "USER_REGISTER_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "USER_REGISTER_PENDING") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "USER_REGISTER_PENDING") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default perekrut_regris;
