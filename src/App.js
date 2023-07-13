import { useState } from "react";
import "./App.css";
import HeaderTitle from "./components/HeaderTitle";
import InputItem from "./components/InputItem";
import { v4 as uuidv4 } from "uuid";
import Main from "./components/Main";

uuidv4();

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [filter, setFilter] = useState("All");

  const onSubmit = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((item) => item.id !== id);
    });
  };

  const allTodos = (name) => {
    setFilter(name);
  };

  const activeTodos = (name) => {
    setFilter(name);
  };

  const completedTodos = (name) => {
    setFilter(name);
  };

  return (
    <main>
      <div className="top"></div>
      <div className={darkMode ? "bottom bottom-dark" : "bottom"}></div>
      <div className="content mb-3">
        <HeaderTitle darkMode={darkMode} setDarkMode={setDarkMode} />
        <InputItem darkMode={darkMode} onSubmit={onSubmit} />
        <Main
          todos={todos}
          toggleTodo={toggleTodo}
          darkMode={darkMode}
          deleteTodo={deleteTodo}
          filter={filter}
          completedTodos={completedTodos}
          activeTodos={activeTodos}
          allTodos={allTodos}
        />
      </div>
    </main>
  );
}

export default App;
