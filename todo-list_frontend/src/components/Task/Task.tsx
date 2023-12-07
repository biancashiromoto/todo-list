import { useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import "../../App.css";
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
          className="input input__status"
          />
        <label htmlFor={`task-${task.id}`}>
          <input
            title={`task-${task.id}`}
            type="text"
            value={currTask.title}
            onChange={(e) => utils.changeTitle(e, task, setCurrTask)}
            className="input input__title"
            maxLength={35}
          />
        </label>
        <select
          title="priority"
          value={currTask.priority}
          onChange={(e) => {
            utils.changePriority(e, task, setCurrTask);
          }}
          name="priority"
          className="input input__priority"
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <button
          title="Delete task"
          type="button"
          onClick={async (e) => {
            e.preventDefault();
            const tasks = await utils.deleteTask(task.id);
            setData(tasks);
          }}
          className="button__delete"
        >
      </button>
    </div>
  )
}

export default Task;