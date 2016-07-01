var expect = require('chai').expect
var request = require('supertest');
var app = require('../../app');

require('../helper');

var http = require('http'),
    server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Hotels CRUD', function(){

  describe('GET /', function(){
    it('should respond with a 200', function(done){
      request(app).get('/').expect(200,done);
    });

    it('displays a header', function(done){
      browser.get('/');
      element(by.tagName('h1')).getText().then(function(text){
        expect(text).to.equal("Welcome to the Hotel List");
        done();
      });
    });

    it('should contain links for sign in | sign up', function(done){
      browser.get('/');
      element.all(by.tagName('a')).getText().then(function(links){
        expect(links[0]).to.equal('Sign In');
        expect(links[1]).to.equal('Sign Up');
        done();
      });
    });

    it('should open /sign-in when the sign in link is clicked', function(done){
      browser.get('/');
      element(by.id('signIn')).click().then(function(){
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal(browser.baseUrl + '/sign-in');
          done();
        });
      });
    });
    it('should open /sign-up when the sign up link is clicked', function(done){
      browser.get('/');
      element(by.id('signUp')).click().then(function(){
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal(browser.baseUrl + '/sign-up');
          done();
        });
      });
    });
  });

  describe('GET /sign-in',function() {

    it('should return a 200 when visit /sign-in', function(done){
      request(app).get(('/sign-in')).expect(200, done);
    });
  })
});
