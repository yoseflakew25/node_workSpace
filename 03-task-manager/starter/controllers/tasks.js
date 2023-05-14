const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('all the fies from the file')
}



const createTask = async(req, res) => {
    try {
        const task = await Task.create(req.body);
        const fullTask = await Task.findById(task._id);
        res.status(201).json({ task: fullTask });
    } catch (error) {
        console.error('Error creating task', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
const getTask = (req, res) => {
    res.json({ id: req.params.id })
}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}