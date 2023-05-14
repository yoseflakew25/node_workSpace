const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks=await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        console.error('Error creating task', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        console.error('Error creating task', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getTask = async (req, res) => {
    try {
        const {id:taskID}=req.params
        const task= await Task.findOne({_id:taskID})
        if (!task){
            return res.stats(404).json({ error: 'Task not found' });
        }
        
        res.status(200).json({task})
    } catch (error) {
        console.error('Error creating task', error);
        res.status(500).json({ error: 'Internal server error' });
      
    }
}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = async (req, res) => {
    try {
       const  {id:taskID}=req.params
       const task=await Task.findByIdAndDelete({_id:taskID})
       if (!task){
        return res.status(404).json({ error: 'Task not found' });
    }
   
    res.status(200).json({task:null,status:'success'})
    } catch (error) {
        console.error('Error creating task', error);
        res.status(500).json({ error: 'Internal server error' });
      
   
    }
   
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}