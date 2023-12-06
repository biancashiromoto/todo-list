
import axios from "axios";
import { NewTaskType, TaskType } from "../types/TaskType";

export default class Requests {
  private API_URL: string;

  constructor() {
    this.API_URL = "http://localhost:3000/tasks"
  }

  public async findAll() {
    try {
      const response = await axios.get(this.API_URL);
      return response.data;
    } catch (error) {
      console.error("ERROR: ", error);
      throw error;
    }
  }

  public async update(task: TaskType) {
    try {
      const { id } = task;
      const response = await axios.put(`${this.API_URL}/${id}`, task);
      return response.data;
    } catch (error) {
      console.error("ERROR: ", error);
      throw error;
    }
  }

  /**
   * register
   */
  public async register(task: NewTaskType) {
    try {
      const response = await axios.post(this.API_URL, task);
      return response.data;
    } catch (error) {
      console.error("ERROR: ", error);
      throw error;
    }
  }
}