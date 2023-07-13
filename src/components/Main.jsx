import React from "react";
import ListItem from "./ListItem";

const Main = ({
  todos,
  toggleTodo,
  darkMode,
  deleteTodo,
  filter,
  allTodos,
  activeTodos,
  completedTodos,
  clearCompleted,
  activeButton,
}) => {
  const FILTER_MAP = {
    All: () => true,
    Active: (todos) => todos.completed === false,
    Completed: (todos) => todos.completed === true,
  };
  return (
    <div className={darkMode ? "card border-0 dark-bg" : "card border-0"}>
      <ul className="list-group list-group-flush">
        {/* {todos.length === 0 && "No Todos"} */}
        {todos.filter(FILTER_MAP[filter]).map((todo, idx) => (
          <ListItem
            {...todo}
            key={idx}
            toggleTodo={toggleTodo}
            darkMode={darkMode}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>

      {/* footer */}
      <footer
        className={
          darkMode ? "card dark-bg container-fluid " : "card container-fluid"
        }
      >
        <div className="row gap-3 p-2">
          <div className={darkMode ? "col light-text" : "col"}>
            {todos.filter(FILTER_MAP[filter]).length} items left
          </div>
          <div className="col-6">
            <div className="row">
              <button
                // className={click ? "col active " : "col"}
                className={`col ${darkMode && "light-text"} ${
                  activeButton === 1 ? "active" : ""
                }`}
                onClick={() => allTodos("All", 1)}
              >
                All
              </button>
              <button
                // className={darkMode ? "col light-text" : "col"}
                className={`col ${darkMode && "light-text"} ${
                  activeButton === 2 ? "active" : ""
                }`}
                onClick={() => activeTodos("Active", 2)}
              >
                Active
              </button>
              <button
                // className={darkMode ? "col light-text" : "col"}
                className={`col ${darkMode && "light-text"} ${
                  activeButton === 3 ? "active" : ""
                }`}
                onClick={() => completedTodos("Completed", 3)}
              >
                Completed
              </button>
            </div>
          </div>
          <button
            onClick={() => clearCompleted()}
            class={darkMode ? "col light-text text-center" : "col text-center"}
          >
            Clear Completed
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Main;
