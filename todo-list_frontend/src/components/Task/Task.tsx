import { useState } from "react";
import { TaskType } from "../../types/TaskType";

interface TaskProps {
    task: TaskType,
}

function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.status === "completed" ? true: false);

  return (
    <div>
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
    </div>
  )
}

export default Task;