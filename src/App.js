import { useState } from "react";
import "./App.css";
import HeaderTitle from "./components/HeaderTitle";
import InputItem from "./components/InputItem";
import ListGroup from "./components/ListGroup";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";
uuidv4();

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

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
  return (
    <main>
      <div className="top"></div>
      <div className={darkMode ? "bottom bottom-dark" : "bottom"}></div>
      <div className="content mb-3">
        <HeaderTitle darkMode={darkMode} setDarkMode={setDarkMode} />
        <InputItem darkMode={darkMode} onSubmit={onSubmit} />
        <ListGroup todos={todos} toggleTodo={toggleTodo} darkMode={darkMode} />
        <Footer todos={todos} />
      </div>
    </main>
  );
}

export default App;
