var router = require('express').Router();
var studentCollection = require('../config/database').get('students');


router.get('/', function (req, res) {
  studentCollection.find({}, function (err, docs) {
    if (err) throw err;

    res.json(docs);
  });
});

router.get('/:id', function(req, res){
  console.log(res);
  studentCollection.findOne({_id: req.params.id}, function(err, student){
    res.json(student);
  });
});

router.post('/', function (req, res) {
  studentCollection.insert(req.body, function (err, persistedStudent) {
    res.json(persistedStudent);
  });
});

router.put('/:id', function(req, res) {
  studentCollection.update({_id: req.params.id}, req.body, function(err, student) {
    // res.json(student); 1 is pass
    studentCollection.findOne({_id: req.params.id}, function(err, student){
      res.json(student);
    });
  });
});

router.delete('/:id', function(req, res) {
  studentCollection.remove({_id: req.params.id}, function() {
    res.json(true);
  });
});

module.exports = router;
