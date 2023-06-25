import { useState } from "react";
import TodoAppItem from "../components/TodoAppItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([""]);
  const [inputValue, setInputValue] = useState("");

  const inputSubmit = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="App">
      <h1 className="todoapp-header">TodoApp</h1>
      <form onSubmit={addTask} className="todoapp-form">
        <input
          type="text"
          onChange={inputSubmit}
          value={inputValue}
          placeholder="Type text"
          className="todoapp-input"
        />
        <button type="submit">Add Task</button>
      </form>

      <TodoAppItem tasks={tasks} />
    </div>
  );
};
export default TodoApp;
