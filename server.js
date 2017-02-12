//server.js
//Authors: Joseph Cirnigliaro
//Copyright Element Technologies, Inc.

//init
//==============================

// call application packages
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app for bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://security:start123@ds147975.mlab.com:47975/elementdb');
var Mtr = require('./models/mtr');


var port = process.env.PORT || 8080;        // set our port



// ROUTES FOR OUR API 
// =============================================================================
//with router
/*
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
   //logging
   console.log('action processing');
   next();
});


*/

//API error handler
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
}
    
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/api', function(req, res) {
    res.json({ message: 'welcome to our api! Get in your Element!'});
});

//POST
app.post('/api/rest', function(req, res) {
    var mtr = new Mtr();
    
    mtr.devID = req.body.devID; //meter id is the request's name. Should be derived from FW?
    mtr.timeStamp_minute = req.body.timeStamp_minute;
    mtr.type = req.body.type;
<<<<<<< HEAD
    mtr.current = req.body.current;
    
        // save meter and check for errors
=======
    mtr.values = req.body.values;
    //should include time stamp formatting
    if (!(mtr.devID || mtr.timeStamp_minute || mtr.type || mtr.values)) {
        handleError(res, "Invalid input", "Must include a device ID, a timestamp, a type, and values[]", 400);
        
    } else {
        // save meter and check for errors on save
>>>>>>> d963648872883a012dda638863c3d663e3ac55a2
        mtr.save(function(err) {
            if (err) {
                res.send(err);
<<<<<<< HEAD
            
            res.json({ message: 'New entry recorded! ' + req.body.devID + ' ' + req.body.current });
=======
            }
            res.json({ message: 'New entry recorded! ' + mtr.devID+ ' at time ' + mtr.timeStamp_minute });
>>>>>>> d963648872883a012dda638863c3d663e3ac55a2
        });
        
    }
          
});

app.get('/api/rest', function(req, res) {
    Mtr.find(function(err, meters) {
        if (err)
            res.send(err);

        res.json(meters);     
    });
<<<<<<< HEAD
});
=======
//single get by devID
app.get('/api/rest/:devID', function(req, res){
    Mtr.findOne(req.params.devID, function(err, mtr) {
        if (err) {
             handleError(res, err.message, 'failed to get message');
        } else {
            res.send(mtr);            
        }
    });
});

//find by _id
app.get('/api/rest/:id', function(req, res){
    Mtr.findById(req.params.id, function(err, mtr) {
        if (err) {
             handleError(res, err.message, 'failed to get message');
        } else {
            res.send(mtr);            
        }
    });
});

app.get('/api/rest/:devID/:timeStamp_minute', function(req, res) {
    Mtr.findOne({ 'devID': req.params.devID, 'timeStamp_minute': req.params.timeStamp_minute }, function(err, mtr) {
        if (err) {
             handleError(res, err.message, 'failed to get message');
        } else {
            res.send(mtr);            
        }
    });
});
     
     
app.delete('api/rest/:devID', function(req, res) {
     Mtr.findOneAndRemove(req.params.devID, function(err, mtr) {
        if (err) {
             handleError(res, err.message, 'failed to delete message');
        } else {
            res.json({ message: 'document deleted!'});        
        }
    });
});

app.put('/api/rest/:devID', function(req, res) {
    Mtr.findOne(req.params.devID, function(err, mtr) {
        if (err){
            res.send(err);
        } else {
            mtr.values = req.body.values;
            mtr.save(function(err, newValues) {
                if (err) {
                    handleError(res, err.message, 'failed to update ' + req.params.devID);
                } else {
                    res.send(newValues);
                }
            });
        }
    });
});
//find devID at the right timestamp
app.put('/api/rest/:devID/:timeStamp_minute', function(req, res) {
    Mtr.findOne({ 'devID': devID, 'timeStamp_minute': timeStamp_minute }, function(err, mtr) {
        if (err){
            res.send(err);
        } else {
            mtr.values = req.body.values;
            mtr.save(function(err, newValues) {
                if (err) {
                    handleError(res, err.message, 'failed to update ' + req.params.devID);
                } else {
                    res.send(newValues);
                }
            });
        }
    });
});

>>>>>>> d963648872883a012dda638863c3d663e3ac55a2
/*    
//routes with /rest 
//POST http://localhost:8080/api/rest
router.route('/rest')
    
//create a new time series doc for new hour at POST ()
    .post(function(req, res) {
        var mtr = new Mtr();
        
    //look to generalize, and open calls from an application layer to server layer
    mtr.devID = req.body.devID; //meter id is the request's name. Should be derived from FW
    mtr.timeStamp_minute = req.body.timeStamp_minute;
    mtr.type = req.body.type;
    mtr.power = req.body.power;
    
        // save meter and check for errors
        mtr.save(function(err) {
            if (err)
                res.send(err);
            
            res.json({ message: 'New entry recorded! ' + req.body.devID + ' ' + req.body.power });
        });
    })
//GET all http://localhost:8080/api/rest
    .get(function(req, res) {
        Mtr.find(function(err, meters) {
            if (err)
                res.send(err);
            
            res.json(meters);     
        });
    });

//single GET
//GET all http://localhost:8080/api/rest/:devID
router.route('/api/rest/:devID')
    .get(function(req, res) {
        Mtr.findById(req.params.devID, function(err, mtr) {
            if (err)
                res.send(err);
            res.send(mtr);
        });
    })
    //updates device with devID
    .put(function(req, res) {
        //find target device
        Mtr.findById(req.params.devID, function(err, mtr) {
            if (err)
                res.send(err);
            
            mtr.values = req.body.values;
            mtr.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Meter updated!'});
            });
        });
});

    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api

app.use('/api', router);
*/
    // START THE SERVER
    // =============================================================================
app.listen(port);
console.log('Get in your element with port ' + port);
