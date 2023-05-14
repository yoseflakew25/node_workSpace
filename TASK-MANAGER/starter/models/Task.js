const mongoose = require('mongoose')




const TaskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    completed: { type: Boolean, required: false, default: false },
});


module.exports = mongoose.model('Task', TaskSchema)