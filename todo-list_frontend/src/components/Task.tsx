import React from "react";
import { Task } from "../types/Task";

type TaskType = {
    id: Task["id"],
    title: Task["title"],
    status: Task["status"],
    priority: Task["priority"],
}

function Task(task: TaskType) {
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