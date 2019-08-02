const express = require('express');
const meetingsRouter = express.Router();
const db = require("../db")

meetingsRouter
    .get("/", (req, res) => {
        res.send(db.getAllFromDatabase("meetings"))
    })
    .post("/", (req, res) => {

    })
    .delete("/", (req, res) => {

    })

module.exports = meetingsRouter
