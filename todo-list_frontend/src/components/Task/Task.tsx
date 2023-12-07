import { useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import "../../App.css";
import Utils from "../../utils/Utils";
import { TaskProps } from "../../interfaces/Props";
import Swal from "sweetalert2";

const utils = new Utils();

function Task({ task, setData }: TaskProps) {

  const [currTask, setCurrTask] = useState<TaskType>({
    id: task.id,
    title: task.title,
    priority: task.priority,
    status: task.status,
  });

  const handleDelete = async () => {
    const alert = await Swal.fire({
      title: "Delete task",
      text: "This cannot be reverted",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    });

    if (alert.isConfirmed) {
      try {
        const updatedData = await utils.deleteTask(task.id);
        setData(updatedData);
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the task.", "error");
      }
    }
  }

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
            handleDelete();
          }}
          className="button__delete"
        >
      </button>
    </div>
  )
}

export default Task;