const express = require('express');
const Tasks = require('../controllers/taskController');
const router = express.Router();


//user routes link
router.use('/user', require('./user'));


router.get('/tasks',Tasks.getAllTasks);   
router.get('/tasks/:id',Tasks.taskDetails); 
router.post('/tasks',Tasks.createTask); 
router.put('/tasks/:id',Tasks.updateTask);  
router.delete('/tasks/:id/',Tasks.deleteTask); 




module.exports = router ;