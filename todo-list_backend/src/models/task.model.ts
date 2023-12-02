import { ITask } from "../interfaces/ITask";
import { SequelizeTask } from "../database/models/sequelize.task.model"
import { TaskType } from "../types/TaskType";

export default class TaskModel implements ITask {
    private model = SequelizeTask;
    
    async findAll(): Promise<ITask[]> {
        const tasks = await this.model.findAll();
        return tasks.map((task) => task.dataValues);
    }

    async findByPk(id: TaskType["id"]): Promise<ITask | null> {
        const task = await this.model.findByPk(id);
        if (!task) return null;
        return task.dataValues;
    }    
    
    async register(task: TaskType): Promise<ITask> {
        const newTask = await this.model.create(task);
        return newTask.dataValues;
    }
    
    async update(id: TaskType["id"], task: TaskType): Promise<ITask | null> {
        const updatedLines = await this.model.update(task, { where: { id }});
        if (updatedLines[0] === 0) return null;
        const updatedTask = await this.model.findByPk(id);
        return updatedTask?.dataValues;
    }

    async deleteTask(id: TaskType["id"]): Promise<string> {
        await this.model.destroy({ where: { id }});
        return "Task successfully deleted."
    }
}