"use strict";
import * as dotenv from "dotenv";
import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

dotenv.config();

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: "localhost",
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE || "todo_list",
  });

export const Task = sequelize.define("Task", {
    id: {
        type: SequelizeDataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: SequelizeDataTypes.STRING,
        allowNull: false,
    },
    priority: {
        type: SequelizeDataTypes.ENUM("high", "medium", "low"),
        allowNull: false,
    },  
    status: SequelizeDataTypes.ENUM("pending", "in progress", "completed"),
}, {
    timestamps: false,
    underscored: true,
    tableName: "tasks"
});
