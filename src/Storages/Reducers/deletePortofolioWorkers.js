const initialState = {
  data: null,
  errorMessage: null,
  isLoading: false,
};

const delete_portofolio = (state = initialState, action) => {
  if (action.type === "DELETE_PORTOFOLIO_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "DELETE_PORTOFOLIO_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "DELETE_PORTOFOLIO_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default delete_portofolio;
