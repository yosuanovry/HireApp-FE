const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const get_experienceWorkers = (state = initialState, action) => {
  if (action.type === "GET_EXPERIENCE_WORKERS_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "GET_EXPERIENCE_WORKERS_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "GET_EXPERIENCE_WORKERS_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default get_experienceWorkers;
