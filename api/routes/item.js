import { Router } from 'express'
import Item from '../models/Item'

const router = Router()

router.route('/item')
  // GET items
  .get((req, res) => {
    Item.find({}, (err, item) => {
      if (err)
        res.status(500).send(err);
      res.json(item);
    });
  })
  // POST create new item
  .post((req, res) => {
    new Item(req.body).save((err, data) => {
      if (err)
        res.status(500).send(err);
      res.json(data);
    });
  })
  // PUT update existing item
  .put((req, res) => {
    Item.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, data) => {
      if (err)
        res.status(500).send(err);
      res.json(data);
    });
  })
  // DELETE delete existing item
  .delete((req, res) => {
    const _id = req.query.id;
    Item.remove({ _id }, (err, data) => {
      if (err)
        res.status(404).send(err);
      res.json(data);
    });
  });

export default router
