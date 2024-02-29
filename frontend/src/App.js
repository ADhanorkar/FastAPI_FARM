import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  //Read all todos
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios.get("http://localhost:8000/api/todo").then((res) => {
      setTodoList(res.data);
    });
  };

  // Post a todo
  const handleAddTodo = () => {
    axios
      .post("http://localhost:8000/api/todo", {
        title: title,
        description: desc,
      })
      .then((res) => {
        getTodos();
        console.log("++++++", res);
      });
  };

  const handleDeleteTodo = (title) => {
    axios.delete(`http://localhost:8000/api/todo/${title}`).then((res) => {
      if (res.data) {
        getTodos();
      }
    });
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDesc(e.target.value);
  };

  return (
    <div
      className="App list-group-item justify-content-center align-item-center mx-auto"
      style={{ width: "400px", backgroundColor: "white", marginTop: "15px" }}
    >
      <h1 className="card text-white bg-primary mb-1">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">
        FastAPI - React - MongoDB [FARM]
      </h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add Your Task</h5>
        <span className="card-text">
          <input
            className="mb-2 form-control titleIn"
            placeholder="Title"
            onChange={handleTitle}
          />
          <input
            className="mb-2 form-control descIn"
            placeholder="Description"
            onChange={handleDescription}
          />
          <button
            className="btn btn-outline-primary mx-2 mb-3"
            style={{ borderRadius: "50px", fontWeight: "bold" }}
            onClick={handleAddTodo}
          >
            Add Task
          </button>
          <h5 className="card text-white bg-dark mb-3">Your Tasks</h5>
          <div>
            <TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
          </div>
          <h6 className="card text-white bg-warning py-1 mb-0">
            Copyright &copy;
          </h6>
        </span>
      </div>
    </div>
  );
}

export default App;
