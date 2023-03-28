const initialState = {
  data: null,
  isLoading: false,
};

const add_portofolio = (state = initialState, action) => {
  if (action.type === "ADD_PORTOFOLIO_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "ADD_PORTOFOLIO_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "ADD_PORTOFOLIO_ERROR") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default add_portofolio;
