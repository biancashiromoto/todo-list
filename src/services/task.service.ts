import taskController from "../controller/task.controller";
import { Task } from "../models/Task";
import { TaskType } from "../types/TaskType"

type Response = {
    status: number,
    data: TaskType[],
}

const findAll = async (): Promise<Response> => {
    const tasks = await Task.findAll();
    const mappedTasks: TaskType[] = tasks.map((task) => task.get({plain: true}));
    return { status: 200, data: mappedTasks };
}

export default {
    findAll
}