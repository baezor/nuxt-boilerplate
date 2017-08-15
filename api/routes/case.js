import { Router } from 'express'
import Cases from '../models/case'
import formidable from 'formidable'
import fs from 'fs'

const router = Router()

/* GET all cases */
router.get('/cases', function (req, res) {
  Cases.find({}, function(err, cases) {
    if (err)
      res.send(err);
    res.json(cases);
  });
});

/* GET one case by slug */
router.get('/cases/:slug', function (req, res) {
  Cases.findOne({slug: req.params.slug }, function(err, oneCase) {
    if (err)
      res.send(err);
    res.json(oneCase);
  });
});

/* POST create new case */
router.post('/case', function (req, res) {
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
    const new_case = new Cases(fields);
    new_case.save(function(err, caseData) {
      if (err)
        res.send(err);
      res.json(caseData);
    });
  });
});

export default router
