const express = require("express");
const router = require("./router");

const app = express();

app.get("/", (_request, response) => {
    response.send("Application running");
});

app.use(express.json());

app.use("/tasks", router);

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
