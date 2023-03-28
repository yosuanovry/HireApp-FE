const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const update_profileCorp = (state = initialState, action) => {
  if (action.type === "UPDATE_PROFILE_CORPORATE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "UPDATE_PROFILE_CORPORATE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "UPDATE_PROFILE_CORPORATE_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default update_profileCorp;
