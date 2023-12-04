import { Request, Response } from "express";
import taskRouter from "./router/task.router";
import * as dotenv from "dotenv";

dotenv.config();

const express = require("express");
const cors = require("cors");
const app = express();

const FRONTEND_PORT = process.env.FRONTEND_PORT;

const corsOptions = {
    origin: [`http://localhost:${FRONTEND_PORT}`],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.get("/", (request: Request, response: Response) => {
    response.send("Application running");
});

app.use(express.json());

app.use("/tasks", taskRouter);

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
