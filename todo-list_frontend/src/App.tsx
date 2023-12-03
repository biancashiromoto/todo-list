import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { TaskType } from "./types/TaskType";
import { mockTasks } from "./mocks/tasks.mock";
import Task from "./components/Task/Task";


function App() {
  const [data, setData] = useState<TaskType[]>([]);
  
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
        data.map((task: TaskType) => (
          <Task task={task}/>
        ))
      ) : ""}
    </>
  )
}

export default App;
