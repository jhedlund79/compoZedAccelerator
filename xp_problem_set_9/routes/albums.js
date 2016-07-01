var express = require('express');
var router = express.Router();
var db = require('../config/database').get('albums');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.find({}, function (err, docs) {
    if (err) res.end(err)

    res.render('index',{albums: docs})
  });
});

router.get('/albums', function(req, res, next) {
  db.find({}, function (err, docs) {
    if (err) res.end(err)
    res.render('albums',{albums: docs})
  });
});

router.post('/albums', function(req, res){
  db.insert(req.body, function(err, data){
    if(err) throw err;
    res.redirect('/albums');
  });
});

router.get('/albums/new', function(req, res){
  res.render('new')
})

router.get('/albums/:id', function(req, res){
  db.findOne({_id: req.params.id}, function(err, album){
    console.log(album)
    res.render('show',{album: album})
  });
});

router.get('/albums/:id/edit', function(req, res) {
  db.findById(req.params.id, function(err, data) {
    if (err) throw err;
    res.render('edit', {album: data});
  });
});

router.delete('/albums/:id', function(req, res) {
  db.remove({_id: req.params.id}, function(err, data) {
    res.redirect('/albums');
  });
})

router.put('/albums/:id', function(req, res){
  db.updateById(req.params.id, req.body, function(err, data) {
    res.redirect('/albums/'+req.params.id);
  });
});

module.exports = router;
