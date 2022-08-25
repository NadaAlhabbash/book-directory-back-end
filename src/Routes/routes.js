const express = require("express");
const controllers = require('../Controllers/index');

const web = express.Router();
web.use(express.json());

web.get("/", controllers.allBookscb);

web.get("/:id", controllers.oneBookcb);

web.post("/", controllers.postBookcb);

web.put("/:id", controllers.updateBookcb);

web.delete("/:id", controllers.deletBookcb);

module.exports = web;
