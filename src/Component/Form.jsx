/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Form = ({addTodo}) => {
  const [value, setValue] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(value){
      addTodo(value)
    }
    setValue('')
  }
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
          {" "}
          Add task
        </button>
      </form>
    </React.Fragment>
  );
};

export default Form;
