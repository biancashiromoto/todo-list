import { Dispatch, SetStateAction } from "react";
import { TaskType } from "../types/TaskType";

export interface TaskProps {
  task: TaskType,
  setData: Dispatch<SetStateAction<TaskType[]>>
}

export interface FormProps {
  data: TaskType[],
  setData: Dispatch<SetStateAction<TaskType[]>>;
}