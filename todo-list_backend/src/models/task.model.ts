import { ITask } from "../interfaces/ITask";
import { SequelizeTask } from "../database/models/sequelize.task.model"
import { TaskType, NewTaskType } from "../types/TaskType";

export default class TaskModel implements ITask {
    private model = SequelizeTask;
    
    async findAll(): Promise<TaskType[]> {
        const tasks = await this.model.findAll();
        return tasks.map((task) => task.dataValues);
    }

    async findByPk(id: TaskType["id"]): Promise<TaskType | null> {
        const task = await this.model.findByPk(id);
        if (!task) return null;
        return task.dataValues;
    }    
    
    async register(task: TaskType): Promise<NewTaskType> {
        const tasks = await this.model.findAll();
        const newTask = await this.model.create(task);
        return newTask.dataValues;
    }
    
    async update(id: TaskType["id"], task: NewTaskType): Promise<TaskType | null> {
        const updatedLines = await this.model.update(task, { where: { id }});
        if (updatedLines[0] === 0) return null;
        const updatedTask = await this.model.findByPk(id);
        return updatedTask?.dataValues;
    }

    async deleteTask(id: TaskType["id"]): Promise<TaskType[]> {
        await this.model.destroy({ where: { id }});
        const tasks = await this.model.findAll();
        return tasks.map((task) => task.dataValues);
    }
}