const { update } = require('../Models/Task');
const Task = require('../Models/Task')

module.exports = {
    async create(req, res) {
        const { name } = req.body;
        const task = await Task.create({name, status: 0})
        return res.json(task)
    },

    async getAll(req, res) {
        const tasks = await Task.findAll()
        return res.json(tasks)
    },
    async getById(req, res) {
        const { id } = req.params;
        const task = await Task.findOne({id});
        return res.json(task)
    },
    async update(req, res) {
        const { id } = req.params;
        const { name, status } = req.body;
        const task = await Task.findByPk(id)
        if(name) {
            task.name = name
        }
        if(status != undefined) {
            task.status = status
        }
        const newTask = await task.save()
        return res.json(newTask)

    },

}