import React from "react";

function Task({ text, category, handleDeleteTask }) {
  function handleDeleteBtn() {
    handleDeleteTask(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteBtn}>
        X
      </button>
    </div>
  );
}

export default Task;
