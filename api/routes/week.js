import { Router } from 'express'
import Week from '../models/week'

const router = Router()

/* GET users listing. */
router.get('/week/:year/:number', function (req, res, next) {
  console.log('hola prdel');
  Week.findOne({year: req.params.year, number: req.params.number}, function(err, week) {
    if (err)
      res.send(err);
    console.log(week);
    res.json(week);
  });
})

/* POST create new week */
router.post('/week', function (req, res) {
  const new_week = new Week(req.body);
  new_week.save(function(err, week) {
    if (err)
      res.send(err);
    res.json(week);
  });
});

/* POST update week */
router.post('/week/update', function (req, res) {
  const data = req.body;
  Week.findOneAndUpdate({ number: data.number, year: data.year }, req.body, { new: true }, function (err, week) {
    if (err)
      res.send(err);
    res.json(week);
  });
});

export default router
