// import { TaskProps } from "../../interfaces/TaskProp";

import { useState } from "react";
import { NewTaskType } from "../../types/TaskType";
import Utils from "../../utils/Utils";

const utils = new Utils();

function Form() {
  const [newTask, setNewTask] = useState<NewTaskType>({
    title: "",
    priority: "low",
    status: "pending"
  });

  // useEffect(() => {
  //   console.log(newTask);
  // }, [newTask]);

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
        onClick={(e) => {
          e.preventDefault();
          utils.createTask(newTask);
        }}
      >
        Create task
      </button>
    </form>
  )
}

export default Form;
