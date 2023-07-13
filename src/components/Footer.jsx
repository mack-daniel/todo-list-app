import React from "react";

const Footer = ({ todos, darkMode, allTodos, activeTodos, completedTodos }) => {
  return (
    <footer class={darkMode ? "card dark-bg  " : "card "}>
      <div class="row gap-3 p-2">
        <div class={darkMode ? "col text-light" : "col"}>
          {/* <span>{todos.filter((item) => item.completed === false).length}</span>{" "} */}
          items left
        </div>
        <div class={darkMode ? "col text-light" : "col"}>
          <div class="d-flex justify-content-between">
            <button onClick={() => allTodos("All")}>All</button>
            <button onClick={() => activeTodos("Active")}>Active</button>
            <button onClick={() => completedTodos("Completed")}>
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
