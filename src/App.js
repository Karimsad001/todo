import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
function App() {
  const ref = useRef(null);
  const [todos, setTodos] = useState([]);
  const [val, setValue] = useState("");
  const handleAddTodo = (e) => {
    if(ref.current.value === ""){
      e.preventDefault()
    } 
    else{
      const textTodo = ref.current.value;
      const nextTodo = { isDone: false, textTodo };
      setTodos([...todos, nextTodo]);
      setValue("");
    }
  };

  const handleToggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleRemoveTodo = (index) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.splice(index, 1);
      return updatedTodos;
    });
  };
  return (
    <div className="todo">
      <h2 className="fw-bold">Todo List</h2>
      <div className="todos">
        {todos.map((todo, ind) => {
          return (
            <div className="d-flex justify-content-between mb-1">
              <h3
                key={ind}
                className={todo.isDone ? "done" : ""}
                onClick={() => handleToggleTodo(ind)}
              >
                {todo.textTodo}
              </h3>
              <span
                onClick={() => handleRemoveTodo(todo.ind)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "red",
                  color: "white",
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>
      <div className="inp d-flex flex-column align-items-center">
        <input
          ref={ref}
          value={val}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
