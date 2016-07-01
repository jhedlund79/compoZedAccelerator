"use strict";

class Validator {
  constructor(validator){
    this._validator = validator;
    this._error = "No error";
  }

  isValid(obj){
    if(obj === undefined) return false;
    var validatorAttributes = Object.getOwnPropertyNames(this._validator);
    var thisObj = this;

    return [validatorAttributes.reduce(function(prev, curr){
      if(!thisObj.checkValidity(curr, obj[curr])) prev = false;
      return prev;
    },true), this._error];
  }

  checkValidity(curr, attribute){
    if(!this.validType(curr, attribute)) return false;
    if(!this.validLength(curr, attribute)) return false;
    return true;
  }

  validType(curr, attribute){
    var type = this._validator[curr].type;
    if(typeof attribute !== type){
      this._error = curr + " is not type " + type;
      return false;
    }
    return true;
  }

  validLength(curr, attribute){
    if(this._validator[curr].length){
      var length = this._validator[curr].length.greaterThan;
      if(!(attribute.length > length)){
        this._error = curr + ' length must be greater than ' + length;
        return false;
      }
    }
    return true;
  }
}

module.exports = Validator;
