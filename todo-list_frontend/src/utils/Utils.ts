import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Requests from "../services/requests";
import { NewTaskType, TaskType } from "../types/TaskType";

const requests = new Requests();
export default class Utils {
  // private requests: Requests;

  constructor() {
    // this.requests = new Requests();
  }

  /**
   * changeStatus
   */
  public async changeStatus(
    e: ChangeEvent<HTMLInputElement>,
    task: TaskType,
    setTask: Dispatch<SetStateAction<TaskType>>
    ) {
    const { checked } = e.target;

      const updatedTask = {
        ...task,
        status: checked ? "completed" : "pending",
      }

      try {
        task = await requests.update(updatedTask);
        setTask(updatedTask);
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
    setCurrTask: Dispatch<SetStateAction<TaskType>>
  ) {
    const selectedPriority = e.target.value;
      const updatedTask = {
        ...task,
        priority: selectedPriority,
      }
      try {
        task = await requests.update(updatedTask);
        setCurrTask(updatedTask);
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
    setTask: Dispatch<SetStateAction<TaskType>>
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
      task = await requests.update(updatedTask);
      setTask(updatedTask);
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  }
  
  /**
   * createTask
   */
  public async createTask(task: NewTaskType,) {
    try {
      const createdTask = await requests.register(task);
      console.log(createdTask);
    } catch (error) {
      console.error("Error creating task: ", error);
    }
  }

  /**
   * deleteTask
   */
  public async deleteTask(id: TaskType["id"]) {
    try {
      const message = await requests.delete(id);
      console.log(message);
    } catch (error) {
      console.error("Error creating task: ", error);
    }
  }
  
}