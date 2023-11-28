import taskController from "../controller/task.controller";

const express = require("express");

const taskRouter = express.Router();

taskRouter.get("/", taskController.findAll);
taskRouter.get("/:id", taskController.findByPk);
taskRouter.post("/", taskController.register);
taskRouter.put("/:id", taskController.update);
taskRouter.delete("/:id", taskController.deleteTask);

export default taskRouter;