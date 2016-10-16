//db models
//Author: Joseph Cirnigliaro
//Copyright Element Technologies, inc.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meterSchema = new Schema({
        devID: String, 
        timeStamp_minute: Date,
        type: String,
        values : { 
            kwhr0: Number,
            kwhr1: Number,
            kwhr2: Number,
            kwhr3: Number,
            kwhr4: Number,
            kwhr5: Number,
            kwhr6: Number,
            kwhr7: Number,
            kwhr8: Number,
            kwhr9: Number,
            kwhr10: Number,
            kwhr11: Number,
            kwhr12: Number,
            kwhr13: Number,
            kwhr14: Number,
            kwhr15: Number,
            kwhr16: Number,
            kwhr17: Number,
            kwhr18: Number,
            kwhr19: Number,
            kwhr20: Number,
            kwhr21: Number,
            kwhr22: Number,
            kwhr23: Number,
            kwhr24: Number,
            kwhr25: Number,
            kwhr26: Number,
            kwhr27: Number,
            kwhr28: Number,
            kwhr29: Number,
            kwhr30: Number,
            kwhr31: Number,
            kwhr32: Number,
            kwhr33: Number,
            kwhr34: Number,
            kwhr35: Number,
            kwhr36: Number,
            kwhr37: Number,
            kwhr38: Number,
            kwhr39: Number,
            kwhr40: Number,
            kwhr41: Number,
            kwhr42: Number,
            kwhr43: Number,
            kwhr44: Number,
            kwhr45: Number,
            kwhr46: Number,
            kwhr47: Number,
            kwhr48: Number,
            kwhr49: Number,
            kwhr50: Number,
            kwhr51: Number,
            kwhr52: Number,
            kwhr53: Number,
            kwhr54: Number,
            kwhr55: Number,
            kwhr56: Number,
            kwhr57: Number,
            kwhr58: Number,
            kwhr59: Number
        }
    });
        

module.exports = mongoose.model('Mtr', meterSchema);

