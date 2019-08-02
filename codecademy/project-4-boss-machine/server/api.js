const express = require('express');
const apiRouter = express.Router();
const ideas = require("./api/ideas")
const meetings = require("./api/meetings")
const minions = require("./api/minions")


module.exports = apiRouter;
