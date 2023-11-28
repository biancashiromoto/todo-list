import taskController from "../controller/task.controller";

const express = require("express");

const taskRouter = express.Router();

taskRouter.get("/", taskController.findAll);
taskRouter.get("/:id", taskController.findByPk);

export default taskRouter;