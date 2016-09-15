// server.js
//Author: Joseph Cirnigliaro
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
var Bear = require('./models/bear');


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

    
//routes with /bears 
//POST http://localhost:8080/api/bear
router.route('/bears')
    //create a bear at POST ()
    .post(function(req, res) {
        var bear = new Bear();
        bear.name = req.body.name; //bears name is the request's name
        // save bear and check for errors
        bear.save(function(err) {
            if (err)
                res.send(err);
            
            res.json({ message: 'Bear created! ' + req.body.name });
        });
    })

    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err)
                res.send(err);
            
            res.json(bears);     
        });
    });
    // REGISTER OUR ROUTES -------------------------------
    // all of our routes will be prefixed with /api
app.use('/api', router);

    // START THE SERVER
    // =============================================================================
app.listen(port);
console.log('Get in your element with port ' + port);
