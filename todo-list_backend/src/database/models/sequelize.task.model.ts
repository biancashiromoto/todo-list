"use strict";
import { Sequelize, DataTypes as SequelizeDataTypes } from 'sequelize';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

export const SequelizeTask = sequelize.define("Task", {
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
