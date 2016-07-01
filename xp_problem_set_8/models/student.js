var mongoose = require('../config/database');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: String
});

module.exports = mongoose.model('Student', studentSchema);
