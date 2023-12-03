import { Request, Response } from "express";
import TaskService from "../services/task.service";
import mapStatusHTTP from "../utils/mapStatusHTTP";

export default class TaskController {
    private taskService: TaskService;

    constructor() {
        this.taskService = new TaskService();
    }

    public findAll = async (req: Request, res: Response) => {
        const { status, data } = await this.taskService.findAll();
        res.status(mapStatusHTTP(status)).json(data);
    }

    public findByPk = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { status, data } = await this.taskService.findByPk(Number(id));
        res.status(mapStatusHTTP(status)).json(data);
    }

    public register = async (req: Request, res: Response) => {
        const { status, data } = await this.taskService.register(req.body);
        res.status(mapStatusHTTP(status)).json(data);
    }

    public update = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { status, data } = await this.taskService.update(Number(id), req.body);
        res.status(mapStatusHTTP(status)).json(data);
    }

    public deleteTask = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { status, data } = await this.taskService.deleteTask(Number(id));
        res.status(mapStatusHTTP(status)).json(data);
    }
}