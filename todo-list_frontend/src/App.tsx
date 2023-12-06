import { useEffect, useState } from "react";
import "./App.css";
import { TaskType } from "./types/TaskType";
// import { mockTasks } from "./mocks/tasks.mock";
import Task from "./components/Task/Task";
import Form from "./components/Form/Form";
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
    // setData(mockTasks);
    fetchData();
  }, []);

  return (
    <>
      <h1>Todo list</h1>
      <article className="task__list">
        {data.length > 0 ? (
          data.map((task: TaskType) => (
            <Task key={task.id} task={task} setData={setData}/>
          ))
        ) : "No tasks."}
      </article>
      <Form data={data} setData={setData} />
    </>
  )
}

export default App;
