import { Task } from "../models/Task";
import { TaskType } from "../types/TaskType"
import { Response } from "../types/Responses";


const findAll = async (): Promise<Response> => {
    const tasks = await Task.findAll();
    const mappedTasks: TaskType[] = tasks.map((task) => task.get({plain: true}));
    return { status: 200, data: mappedTasks };
}

const findByPk = async (id: number): Promise<Response> => {
    const task = await Task.findByPk(id);
    if (!task) return { status: 404, data: "Error" }
    return { status: 200, data: task as any }
}

export default {
    findAll,
    findByPk
}