import React from "react";
import "./style.css";

const Task = ({ id, description, isDone, editTogle }) => {
  return (
    <div id={id} className="task">
      {/* <span> */}
      <div>
        <input className="checkbox" type="checkbox" checkbox={isDone} />
        <span className="title">{description}</span>
      </div>
      <div>
        <button className="task-btn" onClick={() => editTogle(id, description)}>
          <i className="fa-solid fa-pen-to-square edit-icon"></i>
        </button>
        <button className="task-btn">
          <i className="fa-solid fa-trash-can delete-icon"></i>
        </button>
      </div>
      {/* </span> */}
    </div>
  );
};

export default Task;
