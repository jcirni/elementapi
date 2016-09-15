//db models
//Author: Joseph Cirnigliaro
//Copyright Element Technologies, inc.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bearSchema = new Schema({
   name: String
});

module.exports = mongoose.model('Bear', bearSchema);