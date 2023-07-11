import React from "react";
import ListItem from "./ListItem";

const ListGroup = ({ todos, toggleTodo, darkMode }) => {
  return (
    <div className="card border-0">
      <ul className="list-group list-group-flush" id="todo-lists">
        {/* {todos.length === 0 && "No Todos"} */}
        {todos.map((todo, idx) => (
          <ListItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            darkMode={darkMode}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
