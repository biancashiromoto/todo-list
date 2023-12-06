import { useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import Utils from "../../utils/Utils";
import { TaskProps } from "../../interfaces/Props";

const utils = new Utils();

function Task({ task, setData }: TaskProps) {

  const [currTask, setCurrTask] = useState<TaskType>({
    id: task.id,
    title: task.title,
    priority: task.priority,
    status: task.status,
  });

  return (
    <div className="task__item">
        <input
          title="status"
          type="checkbox"
          checked={currTask.status === "completed"}
          onChange={(e) => {
            utils.changeStatus(e, task, setCurrTask);
          }}
          name="status"
          />
        <label htmlFor={`task-name-${task.id}`}>
          <span style={{display: "none"}}>Task: </span>
          <input
            name={`task-name-${task.id}`}
            type="text"
            value={currTask.title}
            onChange={(e) => utils.changeTitle(e, task, setCurrTask)}
          />
        </label>
        <select
          title="priority"
          value={currTask.priority}
          onChange={(e) => {
            utils.changePriority(e, task, setCurrTask);
          }}
          name="priority"
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <p>{currTask.status}</p>
        <button
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            const tasks = await utils.deleteTask(task.id);
            setData(tasks);
          }}
        >
        Delete task
      </button>
    </div>
  )
}

export default Task;