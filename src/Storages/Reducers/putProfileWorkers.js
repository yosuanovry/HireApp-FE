const initialState = {
  data: null,
  isLoading: false,
};

const put_profileWorkers = (state = initialState, action) => {
  if (action.type === "UPDATE_PROFILE_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "UPDATE_PROFILE_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "UPDATE_PROFILE_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default put_profileWorkers;
