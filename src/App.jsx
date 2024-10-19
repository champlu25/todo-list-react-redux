import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { editTodo, addTodo, deleteTodo } from "./handlers";
import { alphabedSort } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import {
  searchValueUpdate,
  refreshTodosFlagUpdate,
  todosUpdate,
} from "./actions";
import {
  selectRefreshTodosFlag,
  selectSearchValue,
  selectTodos,
} from "./selectors";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const refreshTodosFlag = useSelector(selectRefreshTodosFlag);
  const searchValue = useSelector(selectSearchValue);

  const toggleRefreshTodosFlag = () => {
    dispatch(refreshTodosFlagUpdate(!refreshTodosFlag));
  };

  useEffect(() => {
    fetch("http://localhost:3005/todos")
      .then((response) => response.json())
      .then((loadedData) => {
        dispatch(todosUpdate(loadedData));
      });
  }, [refreshTodosFlag]);

  const handleChangeTodo = (event) => {
    dispatch(searchValueUpdate(event.target.value));
  };

  return (
    <>
      <div className={styles.todosContainer}>
        <div className={styles.headerContent}>
          <span className={styles.title}>Todo List</span>
          <button
            className={styles.alphabedBtn}
            onClick={() => dispatch(todosUpdate(alphabedSort(todos)))}
          >
            A⬇Z
          </button>
          <button
            className={styles.btnAdd}
            onClick={() => addTodo(toggleRefreshTodosFlag)}
          >
            🞢
          </button>
          <span className={styles.findTodoLabel}>Поиск </span>
          <input
            className={styles.findTodoInput}
            value={searchValue}
            onChange={handleChangeTodo}
          />
        </div>
        {todos
          .filter(({ content }) =>
            content.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map(({ id, content }) => (
            <li className={styles.todoWrapper} key={id}>
              <input type="checkbox" />
              {content}
              <button
                onClick={() => deleteTodo(id, toggleRefreshTodosFlag)}
                className={styles.deleteTodoBtn}
              >
                ❌
              </button>
              <button
                className={styles.editBtn}
                onClick={() => {
                  editTodo(id, content, toggleRefreshTodosFlag);
                }}
              >
                &#x1F589;
              </button>
            </li>
          ))}
      </div>
    </>
  );
}

export default App;
