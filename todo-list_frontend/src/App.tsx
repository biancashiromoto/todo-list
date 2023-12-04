import { useEffect, useState } from "react";
import "./App.css";
// import axios from "axios";
import { TaskType } from "./types/TaskType";
// import { mockTasks } from "./mocks/tasks.mock";
import Task from "./components/Task/Task";
import Requests from "./services/requests";

const requests = new Requests();

function App() {
  const [data, setData] = useState<TaskType[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tasks = await requests.findAll();
        setData(tasks);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Todo list</h1>
      <article className="task__list">
        {data.length > 0 ? (
          data.map((task: TaskType) => (
            <Task key={task.id} task={task}/>
          ))
        ) : "No tasks."}
      </article>
    </>
  )
}

export default App;
