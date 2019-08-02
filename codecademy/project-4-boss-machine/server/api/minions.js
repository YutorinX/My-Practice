const express = require('express');
const minionsRouter = express.Router();
const db = require("../db")

minionsRouter
    .get("/", (req, res) => {
        res.send(db.getAllFromDatabase("minions"))
    })
    .post("/", (req, res) => {

    })
    .get("/:minionId", (req, res) => {
        const id = req.params.minionId
    })
    .put("/:minionId", (req, res) => {
        const id = req.params.minionId
    })
    .delete("/minionId", (req, res) => {
        const id = req.params.minionId
    })

module.exports = minionsRouter
