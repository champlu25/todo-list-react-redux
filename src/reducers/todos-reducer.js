const initialState = {
  todos: [],
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODOS_UPDATE":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};
