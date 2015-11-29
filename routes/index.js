var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Token = mongoose.model('Token');

// get routes

router.get('/tokens', function(req, res, next){
   Token.find(function(err, tokens){
      if (err) {return next(err);}
      res.json(tokens);
   });
});

router.get('/tokens/query/:str', function(req, res, next){
   Token.find({name: {$regex: req.str, $options: 'i'}}, function(err, tokens){
      if (err) {return next(err);}
      res.json(tokens);
   });
});

// router param middleware

router.param('str', function(req, res, next, id) {
   req.str = id;
   next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MTG Token Manager' });
});

module.exports = router;
