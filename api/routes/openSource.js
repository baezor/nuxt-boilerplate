import { Router } from 'express'
import OpenSource from '../models/openSource'

const router = Router()

/* GET all open source projects */
router.get('/open-source', function (req, res) {
  OpenSource.find({}, function(err, openSources) {
    if (err)
      res.send(err);
    res.json(openSources);
  });
});

/* GET one open source project by slug */
router.get('/open-source/:slug', function (req, res) {
  OpenSource.findOne({slug: req.params.slug }, function(err, openSource) {
    if (err)
      res.send(err);
    res.json(openSource);
  });
});

/* POST create new open source project */
router.post('/open-source', function (req, res) {
  const new_case = new OpenSource(req.body);
  new_case.save(function(err, openSource) {
    if (err)
      res.send(err);
    res.json(openSource);
  });
});

export default router
