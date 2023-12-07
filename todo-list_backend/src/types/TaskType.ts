export type Priority = "high" | "medium" | "low";
export type Status = "pending" | "completed";

export type TaskType = {
    id: number,
    title: string,
    priority: Priority,
    status: Status
}

export type NewTaskType = {
    title: string,
    priority: Priority,
    status: Status
}