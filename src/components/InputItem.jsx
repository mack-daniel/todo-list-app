import React, { useState } from "react";

const InputItem = ({ onSubmit, darkMode }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  };

  return (
    <div className={darkMode ? "dark-bg mb-4" : "light-bg mb-4 "}>
      <form
        onSubmit={handleSubmit}
        className={
          darkMode
            ? "input-group-text dark-bg gap-3"
            : "input-group-text light-bg gap-3 border-1"
        }
      >
        <input type="checkbox" disabled />
        <span id="status">
          {newItem !== "" ? "Currently typing" : "Create a new todo..."}
        </span>
        <input
          type="text"
          className={
            darkMode
              ? "form-control dark-bg border-0"
              : "form-control light-bg border-1"
          }
          id="input-todo"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputItem;
