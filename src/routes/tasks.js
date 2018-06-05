const express = require('express');
const router = express.Router();

const Task = require('../models/Task');

router.get('/', async (req, res) =>{
    const tasks = await Task.find();
    res.json(tasks);
        
    //res.send('API Tasks is goes here')
});

router.post('/', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({
        status: 'Task Saved'
    });
        
    //res.send('API Tasks is goes here')
});

router.put('/id', async (req, res) => {
    await Task.findOneAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Task Update'
    });

})

router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Task Delete'
    });
});

module.exports = router;