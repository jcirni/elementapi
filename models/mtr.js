//db models
//Author: Joseph Cirnigliaro
//Copyright Element Technologies, inc.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meterSchema = new Schema({
   //type: String,
   devID: String,
   //Data: Number,
   //Timestamp: String

});

module.exports = mongoose.model('Mtr', meterSchema);

