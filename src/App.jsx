import React, { useState } from "react";
import Form from "./Component/Form";
import Todo from "./Component/Todo";
import EditForm from "./Component/EditForm";

const App = () => {
  const [todo, setTodo] = useState([]);
  const addTodo = (value) => {
    setTodo([
      ...todo,
      {
        id: new Date().getTime().toString(),
        task: value,
        isCompleted: false,
        isEditing: false,
      },
    ]);
    console.log(todo);
  };
  const deleteTodo = (id) => {
    const newTodo = todo.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(newTodo);
  };
  const taskCompleted = (id) => {
    const completedTask = todo.map((todo) => {
      return todo.id === id
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo;
    });
    setTodo(completedTask);
  };
  const editTodo = (id) => {
    const editTodo = todo.map((todo) => {
      return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
    });
    setTodo(editTodo);
    console.log("edit");
  };
  const editTask = (task,id) => {
    const editing = todo.map((todo) => {
      return todo.id === id
        ? { ...todo, task, isEditing: !todo.isEditing }
        : todo;
    });
    setTodo(editing);
  };

  return (
    <React.Fragment>
      <div className="TodoWrapper">
        <h1>Todo Lists</h1>
        <Form addTodo={addTodo} />
        {todo &&
          todo.map((todo, index) => {
            return todo.isEditing ? (
              <EditForm editTask={editTask} task={todo}/>
            ) : (
              <Todo
                key={index}
                todo={todo}
                deleteTodo={deleteTodo}
                taskCompleted={taskCompleted}
                editTodo={editTodo}
              />
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default App;
