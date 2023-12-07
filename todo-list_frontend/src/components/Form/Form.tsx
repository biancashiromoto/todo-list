import { useState } from "react";
import { FormProps } from "../../interfaces/Props";
import { NewTaskType } from "../../types/TaskType";
import Utils from "../../utils/Utils";
import "../../App.css";
import "./Form.css";

const utils = new Utils();

function Form({ data, setData }: FormProps) {
  const [newTask, setNewTask] = useState<NewTaskType>({
    title: "",
    priority: "low",
    status: "pending"
  });

  return (
    <form className="task__form">
      <h5>Create new task:</h5>
      <div className="task__title-priority">
        <label htmlFor="task-title">
          <input
            title="task-title"
            type="text"
            value={newTask.title}
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value});
            }}
            className="input input__title input__new-task--title"
          />
        </label>
        <select
          title="priority"
          value={newTask.priority}
          onChange={(e) => {
            setNewTask({...newTask, priority: e.target.value});
          }}
          name="priority"
          className="input input__priority"
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <button
        title="Create task"
        type="button"
        onClick={async (e) => {
          e.preventDefault();
          const createdTask = await utils.createTask(newTask, setNewTask);
          setData([...data, createdTask]);
        }}
        className="button__create-task"
      >
        Create task
      </button>
    </form>
  )
}

export default Form;
