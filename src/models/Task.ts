"use strict";
import { Model, Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

export const Task = (sequelize: Sequelize, DataTypes: typeof SequelizeDataTypes) => {
    const Task = sequelize.define("Task", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: DataTypes.INTEGER
        },
        title: {
            type: DataTypes.STRING,
        },
        priority: {
            type: DataTypes.ENUM("high", "medium", "low"),
        },
        status: {
            type: DataTypes.ENUM("pending", "in progress", "completed"),
        }
    }, {
        timestamps: true,
        underscored: true,
        tableName: "tasks"
    });
    return Task;
}

export default Task;