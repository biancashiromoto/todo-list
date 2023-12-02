import { Request, Response } from "express";
import TaskService from "../services/task.service";

const taskService: TaskService = new TaskService();

const findAll = async (req:Request, res: Response) => {
    const { status, data } = await taskService.findAll();
    res.status(200).json(data);
}

const findByPk = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await taskService.findByPk(Number(id));
    res.status(200).json(data);
}

const register = async (req: Request, res: Response) => {
    const { status, data } = await taskService.register(req.body);
    res.status(201).json(data);  
}

const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await taskService.update(Number(id), req.body);
    res.status(200).json(data);
}

const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await taskService.deleteTask(Number(id));
    res.status(200).json(data);
}

export default {
    findAll,
    findByPk,
    register,
    update,
    deleteTask
}
