import { Request, Response } from "express";
import taskService from "../services/task.service"
import { TaskType } from "../types/TaskType";

const findAll = async (req:Request, res: Response) => {
    const { status, data } = await taskService.findAll();
    res.status(status).json(data);
}

const findByPk = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { status, data } = await taskService.findByPk(Number(id));
    res.status(status).json(data);
}

const register = async (req: Request, res: Response) => {
    const { status, data } = await taskService.register(req.body);
    res.status(status).json(data);
}

export default {
    findAll,
    findByPk,
    register
}
