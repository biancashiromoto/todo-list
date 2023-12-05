import { ChangeEvent, FormEvent, useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import Requests from "../../services/requests";

interface TaskProps {
    task: TaskType,
}

const requests = new Requests();

function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.status === "completed");

  const handleChange = async (e: ChangeEvent<HTMLInputElement> | FormEvent<HTMLParagraphElement>, task: TaskType) => {
    if ("checked" in e.target) {
      const { checked } = e.target;

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
    } else {
      const { innerText } = e.target as HTMLDivElement;
      const updatedTask = {
        ...task,
        title: innerText,
      }
      try {
        task = await requests.update(updatedTask);
        console.log(task.title);
      } catch (error) {
        console.error("Error updating task: ", error);
      }
    }
  }

  return (
    <div className="task__item">
        <input
          title="status"
          type="checkbox"
          checked={isTaskCompleted}
          onChange={(e) => handleChange(e, task)}
          name="status"
          />
        <p
          contentEditable={true}
          onInput={(e) => handleChange(e, task)}
          suppressContentEditableWarning={true}
        >
          {task.title}
        </p>
        <p>{task.priority}</p>
        <p>{isTaskCompleted ? "completed" : "pending"}</p>
    </div>
  )
}

export default Task;