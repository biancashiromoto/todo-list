import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Requests from "../services/requests";
import { TaskType } from "../types/TaskType";

export default class Utils {
  private requests: Requests;

  constructor() {
    this.requests = new Requests();
  }

  /**
   * changeStatus
   */
  public async changeStatus(
    e: ChangeEvent<HTMLInputElement>,
    task: TaskType,
    setIsTaskCompleted: Dispatch<SetStateAction<boolean>>
    ) {
    const { checked } = e.target;

      const updatedTask = {
        ...task,
        status: checked ? "completed" : "pending",
      }

      try {
        task = await this.requests.update(updatedTask);
        setIsTaskCompleted(task.status === "completed");
      } catch (error) {
        console.error("Error updating task: ", error);
      }
  }
  
}