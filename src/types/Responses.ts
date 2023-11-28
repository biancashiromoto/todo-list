import { TaskType } from "./TaskType";

export type Response = {
    status: number,
    data: TaskType[] | string,
}