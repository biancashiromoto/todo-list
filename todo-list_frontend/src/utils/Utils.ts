import { ChangeEvent, Dispatch, SetStateAction } from "react";
import Requests from "../services/requests";
import { NewTaskType, TaskType } from "../types/TaskType";

const requests = new Requests();
export default class Utils {

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
        return null;
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
        return null;
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

    const isTitleInUse = await this.isTitleInUse(task.title);
    if (!isTitleInUse) {
      const updatedTask = {
        ...task,
        title: newTitle,
      };
      try {
        task = await requests.update(updatedTask);
        setTask(updatedTask);
      } catch (error) {
        console.error("Error updating task: ", error);
        return null;
      }
    }
    throw new Error("Title already in use."); 
  }
  
  /**
   * createTask
   */
  public async createTask(task: NewTaskType, setNewTask: Dispatch<React.SetStateAction<NewTaskType>>) {
    const isTitleInUse = await this.isTitleInUse(task.title);
    if (!isTitleInUse) {
        try {
          const createdTask = await requests.register(task);
          setNewTask({
            title: "",
            priority: "low",
            status: "pending"
          });
        return createdTask;
        } catch (error) {
          console.error("Error creating task: ", error);
          return null;
        }
    }
    throw new Error("Title already in use."); 
  }

  /**
   * deleteTask
   */
  public async deleteTask(id: TaskType["id"]) {
    try {
      await requests.delete(id);
      const tasks = await requests.findAll();
      return tasks;
    } catch (error) {
      console.error("Error creating task: ", error);
      return null;
    }
  }

  /**
   * isTitleInUse
   */
  public async isTitleInUse(title: TaskType["title"]) {
    const tasks = await requests.findAll();
    const titles = tasks.map((task: TaskType) => task.title);
    return titles.includes(title);
  }
  
}