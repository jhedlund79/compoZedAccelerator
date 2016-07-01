var expect = require('chai').expect
var request = require('supertest');
var app = require('../../app');
var User = require('../../models/user');

require('../helper');

describe('Users', function () {
  beforeEach(function (done) {
    User.fetchAll().then(function (collection) {
      collection.forEach(function (model) {
        model.destroy();
      });
      done();
    });
  });

  after(function (done) {
    User.fetchAll().then(function (collection) {
      collection.forEach(function (model) {
        model.destroy();
      });
      done();
    });
  });

  describe('POST /sign-up', function(){
    it('should store user in the database', function(done){
      var email = 'email@gmail.com';
      var password = 'passwor1'
      var user = {
        email: email,
        confirmPass: password,
        password: password
      };

      request(app).post('/sign-up')
        .send(user)
        .end(function (req, res) {
          expect(res.body.email).to.equal(email);
          expect(res.body.password).to.equal(password);
          User.fetchAll().then(function (collection) {
            console.log("size of collection: ", collection.length);
            expect(collection.length).to.equal(1); //checking if number of items in dB changed
            done();
          });
        })
    })
  })

});
