import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Task } from "./types/Task";


function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then(response => {
      console.log(response.data);
      setData(response.data);
    })
  }, []);

  return (
    <>
      <h1>Todo list</h1>
      {data.length > 0 ? (
        data.map((task: Task) => (
        <div>
          <label>
            <input type="checkbox" />
            {task.title}
          </label>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
        </div>
        ))
      ) : ""}
    </>
  )
}

export default App;
