const initialState = {
  data: null,
  isLoading: false,
};

const add_experiences = (state = initialState, action) => {
  if (action.type === "ADD_EXPERIENCE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "ADD_EXPERIENCE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "ADD_EXPERIENCE_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default add_experiences;
