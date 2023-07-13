import React, { useState } from "react";
import ListItem from "./ListItem";

const ListGroup = ({ todos, toggleTodo, darkMode, deleteTodo, filter }) => {
  const [hover, setHover] = useState(false);

  const FILTER_MAP = {
    All: () => true,
    Active: (todos) => todos.completed === false,
    Completed: (todos) => todos.completed === true,
  };
  return (
    <div className="card border-0">
      <ul className="list-group list-group-flush" id="todo-lists">
        {/* {todos.length === 0 && "No Todos"} */}
        {todos.filter(FILTER_MAP[filter]).map((todo) => (
          <ListItem
            {...todo}
            // key={todo.id}
            toggleTodo={toggleTodo}
            darkMode={darkMode}
            hover={hover}
            setHover={setHover}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
