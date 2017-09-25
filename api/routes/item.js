import { Router } from 'express'
import Item from '../models/Item'

const router = Router()

/* GET all items */
router.get('/items', (req, res) => {
  Item.find({}, (err, item) => {
    if (err)
      res.status(500).send(err);
    res.json(item);
  });
});

/* POST create new item */
router.post('/item', (req, res) => {
    const newItem = new Item(req.body);
    newItem.save((err, data) => {
      if (err)
        res.status(500).send(err);
      res.json(data);
    });
  });

/* DELETE item by ID */
router.delete('/item', (req, res) => {
  const _id = req.query.id;
  Item.remove({ _id }, (err, data) => {
    if (err)
      res.status(404).send(err);
    res.json(data);
  });
});

export default router
