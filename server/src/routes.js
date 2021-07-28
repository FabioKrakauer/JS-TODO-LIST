const express = require('express');
const router = express.Router();

const TaskController = require('./Controllers/TaskController');

router.post('/task/create', TaskController.create);
router.get('/tasks', TaskController.getAll)
router.get('/task/:id', TaskController.getById)
router.put('/task/:id', TaskController.update)

router.get('/', (req, res) => {
    res.json({hello: "world"})
})

module.exports = router;