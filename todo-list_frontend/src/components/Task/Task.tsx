import { TaskType } from "../../types/TaskType";

interface TaskProps {
    task: TaskType,
}

function Task({ task }: TaskProps) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.status === "completed" ? true : false}
        />
        {task.title}
      </label>
      <p>{task.priority}</p>
    </div>
  )
}

export default Task;