const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
    res.json("AAAAA");
});

module.exports = router;