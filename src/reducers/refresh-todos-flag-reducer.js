const initialState = {
  refreshTodosFlag: false,
};

export const refreshTodosFlagReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REFRESH_TODOS_FLAG_UPDATE":
      return {
        ...state,
        refreshTodosFlag: action.payload,
      };
    default:
      return state;
  }
};
