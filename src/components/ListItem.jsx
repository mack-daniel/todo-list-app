import React, { useState } from "react";
import Delete from "../images/icon-cross.svg";

const ListItem = ({
  completed,
  id,
  title,
  toggleTodo,
  darkMode,

  deleteTodo,
}) => {
  return (
    <li
      className={
        darkMode
          ? "list-group-item d-flex align-items-center justify-content-between dark-bg border-0 py-3"
          : "list-group-item d-flex align-items-center justify-content-between light-bg border-1 py-3"
      }
    >
      <div className="d-flex align-items-center justify-content-between gap-3 w-100">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          <span className={completed ? "completed-item ms-3 " : "ms-3 light"}>
            {title}
          </span>
        </div>

        <button onClick={() => deleteTodo(id)}>
          <img src={Delete} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default ListItem;
