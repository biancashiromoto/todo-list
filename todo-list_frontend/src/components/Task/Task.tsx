import { useState } from "react";
import { TaskType } from "../../types/TaskType";
import "./Task.css";
import Utils from "../../utils/Utils";

interface TaskProps {
    task: TaskType,
}

const utils = new Utils();

function Task({ task }: TaskProps) {
  const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(task.status === "completed");
  const [priority, setPriority] = useState<TaskType["priority"]>(task.priority);
  const [title, setTitle] = useState<TaskType["title"]>(task.title);

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
          onInput={(e) => utils.changeTitle(e, task, setTitle)}
          suppressContentEditableWarning={true}
        >
          {title}
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