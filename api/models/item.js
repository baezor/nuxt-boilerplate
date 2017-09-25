var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of item'
  },
});

module.exports = mongoose.model('Item', ItemSchema);