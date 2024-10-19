export const todosUpdate = (value) => (dispatch) => {
  dispatch({ type: "TODOS_UPDATE", payload: value });
};
