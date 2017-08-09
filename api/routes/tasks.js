import { Router } from 'express'
import Task from '../models/task'

const router = Router()

/* GET users listing. */
router.get('/tasks', function (req, res, next) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
})

router.post('/tasks', function (req, res) {
  const new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
});

export default router
