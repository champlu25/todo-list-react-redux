const initialState = {
  searchValue: "",
};

export const searchValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_VALUE_UPDATE":
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
