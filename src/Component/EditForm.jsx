/* eslint-disable react/prop-types */
import React, { useState } from "react";

const EditForm = ({ editTask ,task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value,task.id);
    console.log('btn');
  };
  return (
    <React.Fragment>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Enter your Task here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add task
        </button>
      </form>
    </React.Fragment>
  );
};

export default EditForm;
