// "use strict";
var expect = require('chai').expect;
var Validator = require('../validator');

describe('Validator', function(){
  describe('valid person object', function(){
    var personValidator = {
      firstName: {type: 'string', length: {greaterThan: 0}},
      lastName: {type: 'string', length: {greaterThan: 0}},
      age: {type: 'number'}
    }

    it('returns true for a valid person object', function(){
      var person = {
        firstName: "John",
        lastName: "Smith",
        age: 21
      }
      // console.log(Object.getOwnPropertyNames(personValidator))
      var validator = new Validator(personValidator);
      expect(validator.isValid(person)[0]).to.equal(true);
    });
    it('returns false for a missing person object', function(){
      var validator = new Validator(personValidator);
      expect(validator.isValid()).to.equal(false);
    });
    it('returns false with a zero length firstName', function(){
      console.log("Is this out of scope?",person);
      var person = {
        firstName: "",
        lastName: "Doe",
        age: 26
      }
      var validator = new Validator(personValidator);
      expect(validator.isValid(person)[0]).to.equal(false);
    });
    it('returns false with a zero length lastName', function(){
      var person = {
        firstName: "John",
        lastName: "",
        age: 26
      }
      var validator = new Validator(personValidator);
      expect(validator.isValid(person)[0]).to.equal(false);
    });
    it('returns false with invalid type firstName', function(){
      var person = {
        firstName: 5,
        lastName: "Doe",
        age: 26
      }
      var validator = new Validator(personValidator);
      expect(validator.isValid(person)[0]).to.equal(false);
    });
    it('should return false missing attribute', function(){
      var person = {
        lastName: "Doe",
        age: 26
      }
      var validator = new Validator(personValidator);
      expect(validator.isValid(person)[0]).to.equal(false);
    });
  });



  describe('valid cat object', function () {
    var catValidations = {
      name: {type: 'string', length: {greaterThan: 0}},
      breed: {type: 'string', length: {greaterThan: 0}},
      age: {type: 'number'}
    };
    var catValidator;

    beforeEach(function () {
      catValidator = new Validator(catValidations);
    });

    it('returns true for a valid object', function () {
      var validCat = {
        name: 'Mittens',
        breed: 'American Shorthair',
        age: 10,
        weight: 13
      };

      expect(catValidator.isValid(validCat)[0]).to.be.true;
    });

    it('returns false for an invalid object', function () {
      var missingNameCat = {
        name: '',
        breed: 'American Shorthair',
        age: 10,
        weight: 13
      };

      expect(catValidator.isValid(missingNameCat)[0]).to.be.false;
    });
  });

  describe('valid error messages', function(){
    var personValidator = {
      firstName: {type: 'string', length: {greaterThan: 0}},
      lastName: {type: 'string', length: {greaterThan: 0}},
      age: {type: 'number'}
    }
    it('contains an error message with a zero length lastName', function(){
      var person = {
        firstName: "John",
        lastName: "",
        age: 26
      }
      var validator = new Validator(personValidator);
      var result = validator.isValid(person);

      expect(result[1]).to.equal('lastName length must be greater than 0');
    });
    it('contains an error message with an invalid type firstName', function(){
      var person = {
        firstName: 5,
        lastName: "Doe",
        age: 26
      }
      var validator = new Validator(personValidator);
      var result = validator.isValid(person);

      expect(result[1]).to.equal('firstName is not type string');
    });
  });
});
