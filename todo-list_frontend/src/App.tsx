import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { Task } from "./types/Task";
import { mockTasks } from "./mocks/tasks.mock";


function App() {
  const [data, setData] = useState<Task[]>([]);
  
  useEffect(() => {
    // axios.get("http://localhost:3000/tasks").then(response => {
    //   console.log(response.data);
    //   setData(response.data);
    // });
    setData(mockTasks);
  }, []);

  return (
    <>
      <h1>Todo list</h1>
      {data.length > 0 ? (
        data.map((task: Task) => (
        <div key={task.id} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <label>
            <input type="checkbox" checked={task.status === "completed" ? true : false} />
            {task.title}
          </label>
          <p>Priority: {task.priority}</p>
        </div>
        ))
      ) : ""}
    </>
  )
}

export default App;
