import { ITask } from "../interfaces/ITask";

export type MessageType = { message: string };

export type ResponseErrorType =
  'INVALID_DATA' |
  'UNAUTHORIZED' |
  'NOT_FOUND' |
  'CONFLICT' |
  'UNPROCESSABLE_ENTITY';

export type ResponseSuccess = {
    status: 'SUCCESSFUL' | 'CREATED',
    data: ITask | ITask[] | MessageType,
}

export type ResponseError = {
    status: ResponseErrorType,
    data: MessageType,
}

export type TaskServiceResponse<T> = {
  status: number,
  data: T
}