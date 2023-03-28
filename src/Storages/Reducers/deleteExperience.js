const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const delete_experience = (state = initialState, action) => {
  if (action.type === "DELETE_EXPERIENCE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "DELETE_EXPERIENCE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "DELETE_EXPERIENCE_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default delete_experience;
