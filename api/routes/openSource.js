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
  const form = new formidable.IncomingForm();
  const uploadDir = 'static/storage';
  form.multiples = true;
  form.keepExtensions = true;
  form.onPart = function(part) {
    form.handlePart(part);
  };
  form.parse(req, function(err, fields, files) {
    if (!fs.existsSync(`${uploadDir}/${fields.title}`)) {
      fs.mkdirSync(`${uploadDir}/${fields.title}`);
    }
    form.uploadDir = `${uploadDir}/${fields.title}`;
    const images = [];
    if (typeof files['uploads[]'] !== 'undefined') {
      if (typeof files['uploads[]'][0] !== 'undefined') {
        files['uploads[]'].forEach(function(file) {
          fs.rename(file.path, form.uploadDir + "/" + file.name);
          images.push(`/storage/${fields.title}/${file.name}`);
        });
      } else {
        fs.rename(files['uploads[]'].path, form.uploadDir + "/" + files['uploads[]'].name);
        images.push(`/storage/${fields.title}/${files['uploads[]'].name}`);
      }
      fields.images = images;
    }
  const new_case = new OpenSource(req.body);
  new_case.save(function(err, openSource) {
    if (err)
      res.send(err);
    res.json(openSource);
  });
});

export default router
