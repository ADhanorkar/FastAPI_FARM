import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, handleDeleteTodo }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <Todo key={index} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
