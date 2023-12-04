import { ChangeEvent, useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import Requests from "../../services/requests";

interface TaskProps {
    task: TaskType,
}

const requests = new Requests();

function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.status === "completed");

  const changeStatus = async (event: ChangeEvent<HTMLInputElement>, task: TaskType) => {
    const { checked } = event.target;
    
    const updatedTask = {
      ...task,
      status: checked ? "completed" : "pending",
    }
    try {
      task = await requests.update(updatedTask);
      setIsTaskCompleted(task.status === "completed");
      console.log("status: ", task.status);
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  }

  return (
    <div className="task__item">
      <label>
        <input
          defaultChecked={isTaskCompleted}
          type="checkbox"
          checked={isTaskCompleted}
          onChange={(e) => changeStatus(e, task)}
        />
        {task.title}
      </label>
      <p>{task.priority}</p>
      <p>{isTaskCompleted ? "completed" : "pending"}</p>
    </div>
  )
}

export default Task;