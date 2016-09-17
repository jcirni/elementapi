//db models
//Author: Joseph Cirnigliaro
//Copyright Element Technologies, inc.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meterSchema = new Schema({
    devID: String

});

module.exports = mongoose.model('Mtr', meterSchema);

