const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({

    taskName: String,
    assignedTo: String,
    comment: String,
    dueDateAndTime: {
        type: Date,
    }

    //firstName:String,
    //lastName:String,
    //contactNumber:String

});

const Task = module.exports = mongoose.model('tasks', TaskSchema);