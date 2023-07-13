import React, { useState } from "react";
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
}) => {
  const FILTER_MAP = {
    All: () => true,
    Active: (todos) => todos.completed === false,
    Completed: (todos) => todos.completed === true,
  };
  return (
    <div className={darkMode ? "card border-0 dark-bg" : "card border-0"}>
      <ul className="list-group list-group-flush" id="todo-lists">
        {/* {todos.length === 0 && "No Todos"} */}
        {todos.filter(FILTER_MAP[filter]).map((todo, idx) => (
          <ListItem
            {...todo}
            key={todo.idx}
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
          <div className={darkMode ? "col text-light" : "col"}>
            {todos.filter(FILTER_MAP[filter]).length} items left
          </div>
          <div className="col-6">
            <div className="row">
              <button
                className={darkMode ? "col text-light" : "col"}
                onClick={() => allTodos("All")}
              >
                All
              </button>
              <button
                className={darkMode ? "col text-light" : "col"}
                onClick={() => activeTodos("Active")}
              >
                Active
              </button>
              <button
                className={darkMode ? "col text-light" : "col"}
                onClick={() => completedTodos("Completed")}
              >
                Completed
              </button>
            </div>
          </div>
          <div
            class={darkMode ? "col text-light text-center" : "col text-center"}
          >
            Clear Completed
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
