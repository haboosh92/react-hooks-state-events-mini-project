import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  const listOfTasks = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        handleDeleteTask={handleDeleteTask}
      />
    );
  });
  return <div className="tasks">{listOfTasks}</div>;
}

export default TaskList;