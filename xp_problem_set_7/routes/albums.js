var express = require('express');
var monk = require('../config/database');
var albumsCollection = monk.get('albums');
var router = express.Router();

// index
router.get('/', function(req, res) {
    res.render('albums/index');
});

// view all albums
router.get('/albums', function(req, res) {
  var albumsCollection = monk.get('albums');
  albumsCollection.find({}, function(err, albums){
    var albums = albums;
    res.render('albums/albums', {albums: albums});
  });
});

// Show
router.get('/:id', function(req, res){
  var albumsCollection = monk.get('albums');
  albumsCollection.findOne({_id: req.params.id}, function(err, album){
    res.render('albums/show', {album: album});
  });
});

//new
router.get('/albums/new', function(req, res) {
    res.render('albums/new', {"genres": ["Jazz", "Rock", "Folk"]});
});

//Edit
router.get('/albums/:id/edit', function(req, res){
  var albumsCollection = monk.get('albums');
  albumsCollection.findOne({_id: req.params.id}, function(err, album){
    res.render('albums/edit', {album: album});
  });
})

//Update

router.put('/:id', function(req, res){
  albumsCollection.findAndModify({
      query: {_id: req.params.id},
      update: {'$set': req.body}
    }, function(err, data){
    if(err) throw err;
    res.redirect('/'+ req.params.id);
  });
});

// Delete
router.delete('/:id', function(req, res) {
  albumsCollection.remove({_id: req.params.id}, function(err, data) {
    res.redirect('/albums');
  })
})

// create
router.post('/albums', function(req, res){
  albumsCollection.insert(req.body, function(err, data){
    if(err) throw err;
    res.redirect('/albums');
  });
});

module.exports = router;
