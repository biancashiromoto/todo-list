import { NewTaskType, TaskType } from '../types/TaskType';

export interface ITask {
    findAll(): Promise<TaskType[]>,
    findByPk(id: TaskType["id"]): Promise<TaskType | null>,
    register(task: TaskType): Promise<NewTaskType>,
    update(id: TaskType["id"], task: NewTaskType): Promise<TaskType | null>,
    deleteTask(id: TaskType["id"]): Promise<TaskType[]>
}