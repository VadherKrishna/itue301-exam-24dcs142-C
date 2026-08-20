let tasks = [
    {
        id: 1,
        title: "Complete Practical",
        completed: false
    }
];


// GET

const getAllTasks = (req, res) => {

    res.status(200).json(tasks);

};


// POST

const createTask = (req, res) => {

    const { title } = req.body;

    const newTask = {

        id: tasks.length + 1,
        title,
        completed: false

    };

    tasks.push(newTask);

    res.status(201).json(newTask);

};


// PUT

const updateTask = (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {

        return res.status(404).json({
            message: "Task not found"
        });

    }

    task.title = req.body.title || task.title;

    if (req.body.completed !== undefined) {

        task.completed = req.body.completed;

    }

    res.status(200).json(task);

};


// DELETE

const deleteTask = (req, res) => {

    const id = parseInt(req.params.id);

    const index = tasks.findIndex(t => t.id === id);

    if (index === -1) {

        return res.status(404).json({
            message: "Task not found"
        });

    }

    tasks.splice(index, 1);

    res.status(200).json({
        message: "Task Deleted Successfully"
    });

};

module.exports = {

    getAllTasks,
    createTask,
    updateTask,
    deleteTask

};