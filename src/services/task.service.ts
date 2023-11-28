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
    if (!task) return { status: 404, data: "Error - There is no task with this id" };
    const mappedTask: TaskType = task.get({plain: true});
    return { status: 200, data: mappedTask };
}

const register = async (data: TaskType): Promise<Response> => {
    const newTask = await Task.create(data);
    const mappedTask: TaskType = newTask.get({plain: true});
    return { status: 201, data: mappedTask };
}

export default {
    findAll,
    findByPk,
    register
}