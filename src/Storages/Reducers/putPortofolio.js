const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const put_portofolio = (state = initialState, action) => {
  if (action.type === "UPDATE_PORTOFOLIO_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "UPDATE_PORTOFOLIO_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "UPDATE_PORTOFOLIO_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default put_portofolio;
