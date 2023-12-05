import { ChangeEvent, FormEvent, useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import Requests from "../../services/requests";
import Utils from "../../utils/Utils";

interface TaskProps {
    task: TaskType,
}

const requests = new Requests();
const utils = new Utils();

function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.status === "completed");
  const [priority, setPriority] = useState(task.priority);

  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | FormEvent<HTMLParagraphElement>, task: TaskType) => {
      const updatedTask = {
        ...task,
        title: e.currentTarget.textContent || "",
      }
      try {
        task = await requests.update(updatedTask);
      } catch (error) {
        console.error("Error updating task: ", error);
      }
    }

  return (
    <div className="task__item">
        <input
          title="status"
          type="checkbox"
          checked={isTaskCompleted}
          onChange={(e) => {
            utils.changeStatus(e, task, setIsTaskCompleted);
            setIsTaskCompleted(task.status === "completed");
          }}
          name="status"
          />
        <p
          contentEditable={true}
          onInput={(e) => handleChange(e, task)}
          suppressContentEditableWarning={true}
        >
          {task.title}
        </p>
        <select
          title="priority"
          value={priority}
          onChange={(e) => {
            utils.changePriority(e, task, setPriority);
          }}
          name="priority"
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <p>{isTaskCompleted ? "completed" : "pending"}</p>
    </div>
  )
}

export default Task;