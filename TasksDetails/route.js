const express = require('express');
const router = express.Router();

const Task = require('./models/task');

//for getting data
router.get('/tasks', function (req, res, next) {

    console.log(req.body);
    Task.find(function (err, task) {
        if (err) {
            res.json(err);
        } else {
            res.json(task);

        }
        
    })
});


//for getting the data according to task name and aggined to
router.get('/taskRecord/:taskName/:assignedTo', function (req, res, next) {

    console.log('req.body');
    console.log(req.params);
    var taskName = req.params.taskName;
    var assignedTo = req.params.assignedTo;
    

    Task.findOne({ $and: [{ taskName: taskName }, { assignedTo: assignedTo }] }, function (err, task) {
        if (err) {
            res.json(err);
        } else {
            res.send(task);

        }

    })
});


//for saving the data
router.post('/tasks', function (req, res, next) {

    var taskName = req.body.taskName;
    var assignedTo = req.body.assignedTo;
    var comment = req.body.comment;
    var dueDateAndTime=req.body.dueDateAndTime;

    var task = new Task(req.body);

    task.save(function (err, task) {

        if (err) {
            res.json({ msg: 'failed to save' });
        } else {
            res.json({ msg: 'tasks are saved' });
        }
    });
});


//for deleting the data
router.delete('/tasks/:id', function (req, res, next) {

    Task.remove({ _id: req.params._id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json({msg:'Record Deleted',result:result});
        }

    })
});


module.exports = router;