export type Priority = "high" | "medium" | "low";
export type Status = "pending" | "in progress" | "completed";

export type TaskType = {
    id: number,
    title: string,
    priority: Priority,
    status: Status
}