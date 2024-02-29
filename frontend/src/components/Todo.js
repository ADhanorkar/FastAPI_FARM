import React from "react";
import axios from "axios";

const Todo = ({ todo, handleDeleteTodo }) => {
  const handleDelete = () => {
    handleDeleteTodo(todo.title);
  };
  return (
    <div>
      <p>
        <span
          style={{ fontWeight: "bold, underline" }}
        >{`${todo.title} : `}</span>
        {todo.description}
        <button
          className="btn btn-outline-danger my-2 mx-2"
          style={{ borderRadius: "50px" }}
          onClick={handleDelete}
        >
          X
        </button>
      </p>
    </div>
  );
};

export default Todo;
