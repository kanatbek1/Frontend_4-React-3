import React from "react";

const TodoAppItem = ({ tasks }) => {
  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} className="todoapp-task">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoAppItem;
