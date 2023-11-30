import { Request, Response } from "express";
import taskRouter from "./router/task.router";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (request: Request, response: Response) => {
    response.send("Application running");
});

app.use(express.json());

app.use("/tasks", taskRouter);

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
