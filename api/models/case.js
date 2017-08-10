var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CaseSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of case'
  },
  slug: {
    type: String,
    Required: 'Slug is required'
  },
  category: {
    type: String,
  },
  desc: {
    type: String,
  },
  year: {
    type: Number,
  },
  link: {
    type: String,
  }
});

module.exports = mongoose.model('Case', CaseSchema);