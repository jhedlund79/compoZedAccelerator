var router = require('express').Router();
var Student = require('../models/student');


router.get('/', function (req, res) {
  Student.find({}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.json(docs);
  });
});

router.get('/:id', function(req, res){
  Student.findOne({_id: req.params.id}, function(err, student){
    if(student !== null){
      res.json(student);
    } else {
      res.status(404);
      res.end();
    }
  });
});

router.post('/', function (req, res) {
  var student = new Student(req.body);
  var errors = student.validateSync();
  if(errors != undefined) {
    res.json(errors);
  } else {
    student.save(function (err, persistedStudent) {
      res.json(persistedStudent);
    });
  }
});

router.put('/:id', function(req, res) {
  var student = new Student(req.body);
  var errors = student.validateSync();

  if(errors != undefined) {
    res.json(errors);
  } else {
    Student.findOne({_id: req.params.id}, function(err, student){
      if(student !== null){
        Student.update({_id: req.params.id}, req.body, function(err, student) {
          res.json(true);
        });
      } else {
        res.status(404);
        res.end();
      }
    });
  }
});

router.delete('/:id', function(req, res) {

  Student.findOne({_id: req.params.id}, function(err, student){
    if(student !== null){
      Student.remove({_id: req.params.id}, function() {
        res.json(true);
      });
    } else {
      res.status(404);
      res.end();
    }
  });
  
});

module.exports = router;
