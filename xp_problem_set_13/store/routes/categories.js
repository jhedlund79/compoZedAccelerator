var express = require('express');
var router = express.Router();
var categoriesCollection = require('../config/database').get('categories');

/* GET categories */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* Get /:id */
router.get('/:id', function(req, res){

  categoriesCollection.findOne({_id: req.params.id}).then(resolved, rejected);

  function resolved(category){
    if(category) res.json(category);
  }

  function rejected(err){
    throw err;
  }
});

router.post('/', function(req, res){

  categoriesCollection.insert(req.body).then(resolved, rejected);

  function resolved(category){
    if(category) res.json(category);
  }

  function rejected(err){
    throw err;
  }
});
module.exports = router;
