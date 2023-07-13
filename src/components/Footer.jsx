import React from "react";

const Footer = ({ todos, darkMode, allTodos, activeTodos, completedTodos }) => {
  console.log(todos);
  return (
    <footer
      className={
        darkMode ? "card dark-bg container-fluid " : "card container-fluid"
      }
    >
      <div className="row gap-3 p-2">
        <div className={darkMode ? "col text-light" : "col"}>
          {/* <span>{todos.filter((item) => item.completed === false).length}</span>{" "} */}
          items left
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-between">
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
  );
};

export default Footer;
