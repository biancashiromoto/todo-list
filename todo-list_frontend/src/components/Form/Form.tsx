import { useState } from "react";
import { FormProps } from "../../interfaces/Props";
import { NewTaskType } from "../../types/TaskType";
import Utils from "../../utils/Utils";
import "../../App.css";

const utils = new Utils();

function Form({ data, setData }: FormProps) {
  const [newTask, setNewTask] = useState<NewTaskType>({
    title: "",
    priority: "low",
    status: "pending"
  });

  return (
    <form>
      <label htmlFor="task-title">
        <input
          title="task-title"
          type="text"
          value={newTask.title}
          onChange={(e) => {
            setNewTask({ ...newTask, title: e.target.value});
          }}
        />
      </label>
      <select
        title="priority"
        value={newTask.priority}
        onChange={(e) => {
          setNewTask({...newTask, priority: e.target.value});
        }}
        name="priority"
      >
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      <button
        type="button"
        onClick={async (e) => {
          e.preventDefault();
          const createdTask = await utils.createTask(newTask, setNewTask);
          setData([...data, createdTask]);
        }}
      >
        Create task
      </button>
    </form>
  )
}

export default Form;
