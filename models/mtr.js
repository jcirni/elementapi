//db models
//Author: Joseph Cirnigliaro
//Copyright Element Technologies, inc.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meterSchema = new Schema({
        devID: String,
        timeStamp_minute: Date,
        type: String,
        values: [Number]
             
    });
        

module.exports = mongoose.model('Mtr', meterSchema);

