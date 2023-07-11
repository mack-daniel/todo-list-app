import React from "react";

const ListItem = ({ completed, id, title, toggleTodo, darkMode }) => {
  return (
    <li
      className={
        darkMode
          ? "list-group-item d-flex align-items-center justify-content-between dark-bg border-0 py-3"
          : "list-group-item d-flex align-items-center justify-content-between light-bg border-1 py-3"
      }
    >
      <div className="d-flex align-items-center gap-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />

        <span className={completed ? "title-item" : ""}>{title}</span>
      </div>
    </li>
  );
};

export default ListItem;
