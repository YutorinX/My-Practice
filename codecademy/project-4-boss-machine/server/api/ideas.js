const express = require('express');
const ideasRouter = express.Router();
const db = require("../db")

ideasRouter
    .get("/", (req, res) => {
        res.send(db.getAllFromDatabase("ideas"))
    })
    .post("/", (req, res) => {

    })
    .get("/:ideaId", (req, res) => {
        const id = req.params.ideaId
    })
    .put("/:ideaId", (req, res) => {
        const id = req.params.ideaId
    })
    .delete("/ideaId", (req, res) => {
        const id = req.params.ideaId
    })

module.exports = ideasRouter
