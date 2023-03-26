const initialState = {
  data: null,
  isLoading: false,
};

const add_skill = (state = initialState, action) => {
  if (action.type === "ADD_SKILL_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "ADD_SKILL_SUCCESS") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else if (action.type === "ADD_SKILL_FAILED") {
    return {
      ...state,
      errorMessage: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};

export default add_skill;
