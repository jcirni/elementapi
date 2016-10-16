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
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://security:start123@ds147975.mlab.com:47975/elementdb');
var Mtr = require('./models/mtr');


var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API 
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req, res, next) {
   //logging
   console.log('action processing');
   next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our api! Get in your Element!' });   
});

    
//routes with /rest 
//POST http://localhost:8080/api/rest
router.route('/rest')
    
//create a new time series doc for new hour at POST ()
    .post(function(req, res) {
        var mtr = new Mtr();
        
    //look to generalize, and open calls from an application layer to server layer
    mtr.devID = req.body.devID; //meter id is the request's name. Should be derived from FW
    mtr.timeStamp_minute = req.body.timeStamp_minute;
    mtr.type = req.body.type;h
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
            if (err)d
                res.send(err);
            
            res.json(meters);     
        });
    });

//single GET
//GET all http://localhost:8080/api/rest/:devID
router.route('/api/rest/:mngID')
    .get(function(req, res) {
        Mtr.findById(req.params.mngID, function(err, mtr) {
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

app.get('*', function(req, res) {
  res.sendfile('./public/');
 });

app.use('/api', router);

    // START THE SERVER
    // =============================================================================
app.listen(port);
console.log('Get in your element with port ' + port);
