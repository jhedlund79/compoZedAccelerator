var expect = require('chai').expect
var request = require('supertest');
var app = require('../../app');

require('../helper');

var http = require('http'),
    server;

var validEmail;
var validPassword;
before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  validEmail = "valid@email.com";
  validPassword = "passwor1";
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Hotels CRUD', function(){
  describe('GET /sign-up', function(){

    it('should return a 200 when visit /sign-up', function(done){
      request(app).get(('/sign-up')).expect(200, done);
    });

    it('displays a header', function(done){
      browser.get('/sign-up');
      element(by.tagName('h1')).getText().then(function(text){
        expect(text).to.equal("Register");
        done();
      });
    });

    it('should have the proper form fields', function(done){
      browser.get('/sign-up');
      element.all(by.tagName('input')).getAttribute('name').then(function(elements){
        expect(elements[0]).to.equal('email');
        expect(elements[1]).to.equal('password');
        expect(elements[2]).to.equal('confirmPass');
        expect(elements[3]).to.equal('submit');
        done();
      });
    });

    it('should not redirect when user enters an invalid email and clicks submit', function(done){
      browser.get('/sign-up');
      validEmail = "invalid"
      element(by.css('[name="email"]')).sendKeys(validEmail);
      element(by.css('[name="password"]')).sendKeys(validPassword);
      element(by.css('[name="confirmPass"]')).sendKeys(validPassword);
      element(by.css('[name="submit"]')).click().then(function(){
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal(browser.baseUrl + '/sign-up');
          done();
        });
      });
    });
    it('should not redirect when user enters a password less than 4 digits clicks submit', function(done){
      browser.get('/sign-up');
      validPassword = "pass";
      element(by.css('[name="email"]')).sendKeys(validEmail);
      element(by.css('[name="password"]')).sendKeys(validPassword);
      element(by.css('[name="confirmPass"]')).sendKeys(validPassword);
      element(by.css('[name="submit"]')).click().then(function(){
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal(browser.baseUrl + '/sign-up');
          done();
        });
      });
    });
    it('should not redirect when passwords dont match and click submit', function(done){
      browser.get('/sign-up');
      element(by.css('[name="email"]')).sendKeys(validEmail);
      element(by.css('[name="password"]')).sendKeys(validPassword);
      element(by.css('[name="confirmPass"]')).sendKeys("x");
      element(by.css('[name="submit"]')).click().then(function(){
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal(browser.baseUrl + '/sign-up');
          done();
        });
      });
    });
    it('should redirect with valdiated fields on submit', function(done){
      browser.get('/sign-up');
      element(by.css('[name="email"]')).sendKeys(validEmail);
      element(by.css('[name="password"]')).sendKeys(validPassword);
      element(by.css('[name="confirmPass"]')).sendKeys(validPassword);
      element(by.css('[name="submit"]')).click().then(function(){
        browser.getCurrentUrl().then(function(url){
          expect(url).to.equal(browser.baseUrl + '/');
          done();
        });
      });
    });
  });
});
