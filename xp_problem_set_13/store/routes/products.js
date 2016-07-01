var express = require('express');
var router = express.Router();
var productsCollection = require('../config/database').get('products');

/* GET products */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

/* Get /:id */
router.get('/:id', function(req, res){

  productsCollection.findOne({_id: req.params.id}).then(resolved, rejected);

  function resolved(product){
    if(product) res.json(product);
  }

  function rejected(err){
    throw err;
  }

});

router.post('/', function(req, res){

  productsCollection.insert(req.body).then(resolved, rejected);

  function resolved(product){
    if(product) res.json(product);
  }

  function rejected(err){
    throw err;
  }
});

router.put('/:id', function(req, res){
  // productsCollection.updateById(req.body._id, {name: req.body.name})
  //   .then(resolved, rejected);
  productsCollection.update(req.params.id, req.body)
    .then(resolved, rejected);

  function resolved(){
    productsCollection.findOne({_id: req.params.id}, function(err, product){
      if(product) res.json(product);
    });
  }

  function rejected(err){
    throw err;
  }

});
module.exports = router;
