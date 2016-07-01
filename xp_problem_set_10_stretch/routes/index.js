var express = require('express');
var db = require('../config/database')
var Validator = require('../config/validator')
var router = express.Router();
var collection = db.get('people');


/* GET home page. */
router.get('/', function(req, res) {
  collection.find({}, function(err, persons){
    res.render('index', { persons: persons });
  });
});

router.get('/new', function(req, res){
  res.render('new');
});

router.post('/', function(req, res){
  console.log(req.body);
  var personValidator = {
      firstName: {type: 'string', length: {greaterThan: 0}},
      lastName: {type: 'string', length: {greaterThan: 0}},
      age: {type: 'number'}
    }
  req.body.age = parseInt(req.body.age);
  var validator = new Validator(personValidator);
  var isValid = validator.isValid(req.body);
  console.log("Is this valid: ", isValid);

  if(isValid[0]){
    collection.insert(req.body, function(err, data){
      if(err) throw err;
      res.redirect('/');
    });
  } else {
      res.render('new', {error: isValid[1]});
  }
});

module.exports = router;
