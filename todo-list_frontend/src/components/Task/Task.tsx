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
  const [priority, setPriority] = useState(task.priority);

  const handleChange = async (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | FormEvent<HTMLParagraphElement>, task: TaskType) => {
    if ("checked" in e.target) {
      const { checked } = e.target;

      const updatedTask = {
        ...task,
        status: checked ? "completed" : "pending",
      }

      try {
        task = await requests.update(updatedTask);
        setIsTaskCompleted(task.status === "completed");
      } catch (error) {
        console.error("Error updating task: ", error);
      }
    } else {
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
  }

  const changePriority = async (e: ChangeEvent<HTMLSelectElement>, task: TaskType) => {
    const selectedPriority = e.target.value;
      const updatedTask = {
        ...task,
        priority: selectedPriority,
      }
      try {
        task = await requests.update(updatedTask);
        setPriority(selectedPriority);
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
        <select
          title="priority"
          value={priority}
          onChange={(e) => {
            changePriority(e, task);
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