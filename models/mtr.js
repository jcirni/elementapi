//db models
//Author: Joseph Cirnigliaro
//Copyright Element Technologies, inc.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var meterSchema = new Schema({
        devID: String,
        timeStamp_minute: Date,
        type: String,
        current: {
            0: Number,
            1: Number,
            2: Number,
            3: Number,
            4: Number,
            5: Number,
            6: Number,
            7: Number,
            8: Number,
            9: Number,
            10: Number,
            11: Number,
            12: Number,
            13: Number,
            14: Number,
            15: Number,
            16: Number,
            17: Number,
            18: Number,
            19: Number,
            20: Number,
            21: Number,
            22: Number,
            23: Number,
            24: Number,
            25: Number,
            26: Number,
            27: Number,
            28: Number,
            29: Number,
            30: Number,
            31: Number,
            32: Number,
            33: Number,
            34: Number,
            35: Number,
            36: Number,
            37: Number,
            38: Number,
            39: Number,
            40: Number,
            41: Number,
            42: Number,
            43: Number,
            44: Number,
            45: Number,
            46: Number,
            47: Number,
            48: Number,
            49: Number,
            50: Number,
            51: Number,
            52: Number,
            53: Number,
            54: Number,
            55: Number,
            56: Number,
            57: Number,
            58: Number,
            59: Number
        }
    });
        

module.exports = mongoose.model('Mtr', meterSchema);

