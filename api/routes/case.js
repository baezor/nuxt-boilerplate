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
  const files = [];
  form.keepExtensions = true;
  form.on('field', function(name, value) {
    if (name === 'title') {
      if (!fs.existsSync(`${uploadDir}/${value}`)) {
        fs.mkdirSync(`${uploadDir}/${value}`);
      }
      form.uploadDir = `${uploadDir}/${value}`;
    }
  });
  form.on('file', function (field, file) {
    // console.log(field, file, file.name);
    files.push([field, file]);
    fs.rename(file.path, form.uploadDir + "/" + file.name);
  });
  console.log(files);
  form.parse(req, function(err, fields, files) {
    console.log(files);
    // const new_case = new Cases(fields);
    /* new_case.save(function(err, caseData) {
      if (err)
        res.send(err);
      res.json(caseData);
    }); */
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
