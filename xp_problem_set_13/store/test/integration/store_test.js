var request = require('supertest');
var app = require('../../app');
var Category = require('../../routes/categories');
var testDb = require('../../config/database');

var categoriesCollection = testDb.get('categories');
var productsCollection = testDb.get('products');


describe('Categories', function(){
  beforeEach(function (done) {
    categoriesCollection.remove({}, function (err) {
      if (err) done(err);
      done();
    });
  });

  describe('endpoints', function(){
    it('should return 200 for /categories', function(done){
      request(app).get('/categories').expect(200, done);
    });
    it('/:id should access category json if category does exist', function(done){
      var category = {
        name: "Paper Products"
      }

      categoriesCollection.insert(category, function(err, data){
        if(err) throw err;
        request(app).get('/categories/'+ data._id).expect(function(response){
          expect(response.body.name).to.equal("Paper Products");
        }).end(done);
      });
    });
    it('/:id should return 404 if category does not exist', function(done){
      request(app).get('/categories/5772dd1d9b286f0d49e88c22').expect(404, done);
      done();
    });
  });
  describe('POST', function() {
    it('should insert a category when post sent to /categories', function(done) {
      var category = {
        name: "Paper Products"
      }

      request(app).post('/categories').send(category).expect(function(response) {
        expect(response.body.name).to.equal('Paper Products');
      }).end(done);
    });
  });
});

describe('Products', function(){
  beforeEach(function (done) {
    productsCollection.remove({}, function (err) {
      if (err) done(err);
      done();
    });
  });
  /* Endpoint testing */
  describe('endpoints', function(){
    it('should return 200 for /products', function(done){
      request(app).get('/products').expect(200, done);
    });
    it('/:id should access product json if product does exist', function(done){
      var category = {
        name: "Paper Products"
      };
      var product = {
        name: "computer paper",
        category: category.name,
        description: "yolo",
        price: 10
      };

      productsCollection.insert(product, function(err, data){
        if(err) throw err;
        request(app).get('/products/'+ data._id).expect(function(response){
          expect(response.body.name).to.equal("computer paper");
        }).end(done);
      });
    });
    it('/:id should return 404 if product does not exist', function(done){
      request(app).get('/products/5772dd1d9b286f0d49e88c22').expect(404, done);
      done();
    });
  });

    /* POST testing */
  describe('POST', function() {
    it('should insert a product when post sent to /productsCollection', function(done) {
      var category = {
        name: "Paper Products"
      };
      var product = {
        name: "computer paper",
        category: category.name,
        description: "yolo",
        price: 10
      };
      request(app).post('/products').send(product).expect(function(response) {
        expect(response.body.name).to.equal('computer paper');
      }).end(done);
    });
  });

  describe('Update', function(){
    it('should update an object on PUT with new params', function(done){
      var category = {
        name: "Paper Products"
      };
      var product = {
        name: "computer paper",
        category: category.name,
        description: "yolo",
        price: 10
      };

      var updatedProduct = {
        name: "update",
        description: "yoloooo",
        price: 14
      }
      productsCollection.insert(product);

      request(app).put('/products/' + product._id).send(updatedProduct).expect(function(response){
        expect(response.body.name).to.equal('update');
      }).end(done);
    });
  });
});
