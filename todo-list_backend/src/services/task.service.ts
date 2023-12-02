import { ITask } from "../interfaces/ITask";
import TaskModel from "../models/task.model";
import { ResponseError, ResponseErrorType, ResponseSuccess } from "../types/Responses";
import { TaskType } from "../types/TaskType";

export default class TaskService {
    constructor(
        private taskModel: ITask = new TaskModel(),
    ) {}

    public async findAll(): Promise<ResponseSuccess> {
        const tasks = await this.taskModel.findAll();
        return { status: "SUCCESSFUL", data: tasks }
    }

    public async findByPk(id: TaskType["id"]): Promise<ResponseSuccess | ResponseError> {
        const task = await this.taskModel.findByPk(id);
        if (!task) return { status: "NOT_FOUND", data: { message: "Task not found"}};
        return { status: "SUCCESSFUL", data: task };
    }

    public async register(task: TaskType): Promise<ResponseSuccess> {
        const newTask = await this.taskModel.register(task);
        return { status: "SUCCESSFUL", data: newTask }
    }

    public async update(id: TaskType["id"], task: TaskType): Promise<ResponseSuccess | ResponseError> {
        const updatedTask = await this.taskModel.update(id, task);
        if (!updatedTask) return { status: "NOT_FOUND", data: { message: "Task not found" }};
        return { status: "SUCCESSFUL", data: updatedTask };
    }

    public async deleteTask(id: TaskType["id"]): Promise<ResponseSuccess | ResponseError> {
        const message = await this.taskModel.deleteTask(id);
        return { status: "SUCCESSFUL", data: { message }};
    }
}