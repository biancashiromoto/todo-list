import { useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";

interface TaskProps {
    task: TaskType,
}

function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.status === "completed");

  return (
    <div className="task__item">
      <label>
        <input
          type="checkbox"
          checked={isTaskCompleted}
          onChange={() => {
            setIsTaskCompleted(prevState => !prevState);
          }}
        />
        {task.title}
      </label>
      <p>{task.priority}</p>
      <p>{task.status}</p>
    </div>
  )
}

export default Task;