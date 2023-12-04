
import axios from "axios";
import { TaskType } from "../types/TaskType";

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
      const { id, status } = task;
      const response = await axios.put(`${this.API_URL}/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error("ERROR: ", error);
      throw error;
    }
  }
}