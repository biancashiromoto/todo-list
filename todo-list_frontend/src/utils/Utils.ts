import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Requests from "../services/requests";
import { NewTaskType, TaskType } from "../types/TaskType";

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

  /**
   * changePriority
   */
  public async changePriority(
    e: ChangeEvent<HTMLSelectElement>,
    task: TaskType,
    setPriority: Dispatch<SetStateAction<TaskType["priority"]>>
  ) {
    const selectedPriority = e.target.value;
      const updatedTask = {
        ...task,
        priority: e.target.value,
      }
      try {
        task = await this.requests.update(updatedTask);
        setPriority(selectedPriority);
      } catch (error) {
        console.error("Error updating task: ", error);
      }
  }

  /**
   * changeTitle
   */
  public async changeTitle(
    e: ChangeEvent<HTMLInputElement>,
    task: TaskType,
    setTitle: Dispatch<SetStateAction<TaskType["title"]>>
  ) {
    const newTitle = e.target.value;  
    if (!newTitle) {
      throw new Error("Task must have a title.");
    }
  
    const updatedTask = {
      ...task,
      title: newTitle,
    };
  
    try {
      task = await this.requests.update(updatedTask);
      setTitle(newTitle);
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  }
  
  /**
   * createTask
   */
  public async createTask(task: NewTaskType,) {
    try {
      const createdTask = await this.requests.register(task);
      console.log(createdTask);
    } catch (error) {
      console.error("Error creating task: ", error);
    }
  }
  
}