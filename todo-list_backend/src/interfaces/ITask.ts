import { TaskType } from '../types/TaskType';

export interface ITask {
    findAll(): Promise<ITask[]>,
    findByPk(id: TaskType["id"]): Promise<ITask | null>,
    register(task: TaskType): Promise<ITask>,
    update(id: TaskType["id"], task: TaskType): Promise<ITask | null>,
    deleteTask(id: TaskType["id"]): Promise<string>
}