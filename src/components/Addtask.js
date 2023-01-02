import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux-toolkit/taskSlice";
import "./style.css";

const AddTask = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({});

  const handleChange = (e) => {
    setTask({
      id: Math.random(),
      [e.target.name]: e.target.value,
      isDone: false,
    });
  };

  const handleClick = () => {
    dispatch(addTask(task));
  };

  return (
    <div className="add-task">
      {/* style={{ border: "1px solid" }} */}
      <h5 className="action-call">AddTask</h5>
      <div className="task-container">
        <input
          className="add-input"
          placeholder="Enter a Todo ... "
          type="text"
          name="description"
          onChange={handleChange}
        />
        <button className="add-btn" onClick={handleClick}>
          <i className="fa-solid fa-plus"></i>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTask;
