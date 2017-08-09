var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeekSchema = new Schema({
  number: {
    type: Number,
    Required: 'Kindly enter the number of week'
  },
  year: {
    type: Number,
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    default: '',
  },
  status: {
    type: [{
      type: String,
      enum: ['passed', 'actual',]
    }],
    default: ['actual']
  }
});

module.exports = mongoose.model('Week', WeekSchema);