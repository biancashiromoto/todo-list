// import { ITask } from "../interfaces/ITask";
import { NewTaskType, TaskType } from "./TaskType";

export type MessageType = { message: string };

export type ResponseSuccessData = TaskType | TaskType[] | NewTaskType;

export type ResponseErrorType =
  "INVALID_DATA" |
  "UNAUTHORIZED" |
  "NOT_FOUND" |
  "CONFLICT" |
  "UNPROCESSABLE_ENTITY";

export type ResponseSuccess = {
    status: "SUCCESSFUL" | "CREATED",
    data: ResponseSuccessData
}

export type ResponseError = {
    status: ResponseErrorType,
    data: MessageType,
}

export type TaskServiceResponse<T> = {
  status: number,
  data: T
}