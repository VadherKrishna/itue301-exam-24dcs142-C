const express = require("express");

const router = express.Router();

const {

    getAllTasks,
    createTask,
    updateTask,
    deleteTask

} = require("../controllers/taskController");

const contentType = require("../middleware/contentType");
const validateId = require("../middleware/validateId");

router.get("/", getAllTasks);

router.post("/", contentType, createTask);

router.put("/:id", validateId, contentType, updateTask);

router.delete("/:id", validateId, deleteTask);

module.exports = router;