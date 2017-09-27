import { Router } from 'express'
import Item from '../models/Item'

const router = Router()
const model = Item

router.route('/item')
  // index -> GET items
  .get((req, res) => {
    model.find({}, (err, item) => {
      if (err)
        res.status(500).send(err);
      res.json(item);
    });
  })
  // create -> POST create new item
  .post((req, res) => {
    new model(req.body).save((err, data) => {
      if (err)
        res.status(500).send(err);
      res.json(data);
    });
  })
  // update -> PUT update existing item
  .put((req, res) => {
    model.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, data) => {
      if (err)
        res.status(500).send(err);
      res.json(data);
    });
  })
  // destroy -> DELETE delete existing item
  .delete((req, res) => {
    const _id = req.query.id;
    model.remove({ _id }, (err, data) => {
      if (err)
        res.status(404).send(err);
      res.json(data);
    });
  });
  
router.route('/item/:id')
  // show -> GET single item
  .get((req, res) => {
    model.findById(req.params.id, (err, item) => {
      if (err)
        res.status(404).send(err);
      res.json(item);
    });
  });

export default router
