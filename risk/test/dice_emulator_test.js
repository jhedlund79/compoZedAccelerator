var expect = require('chai').expect;
var DiceEmulator = require('../public/javascripts/dice_emulator')

describe('dice_emulator', function(){
  var diceEmulator = new DiceEmulator();

  it('rolls 1 dice and returns 1 number between 1-6', function() {
    var result = diceEmulator.roll(1);
    expect(result.length).to.equal(1);
    expect(result[0]).to.be.at.least(1);
    expect(result[0]).to.be.below(7);
  });

  it('rolls 2 dice and returns 2 numbers', function() {
    var result = diceEmulator.roll(2);
    expect(result.length).to.equal(2);
    expect(result[0]).to.be.at.least(1);
    expect(result[0]).to.be.below(7);
    expect(result[1]).to.be.at.least(1);
    expect(result[1]).to.be.below(7);
  });

  it('rolls 2 dice and returs 2 numbers in descending order', function(){
    var result = diceEmulator.roll(2);
    expect(result[0]).to.be.at.least(result[1]);
  });

  it('rolls 3 dice and returns 3 numbers', function() {
    var result = diceEmulator.roll(3);
    expect(result.length).to.equal(3);
    expect(result[0]).to.be.at.least(1);
    expect(result[0]).to.be.below(7);
    expect(result[1]).to.be.at.least(1);
    expect(result[1]).to.be.below(7);
    expect(result[2]).to.be.at.least(1);
    expect(result[2]).to.be.below(7);
  });

  it('rolls 3 dice and returs 3 numbers in descending order', function(){
    var result = diceEmulator.roll(3);
    expect(result[0]).to.be.at.least(result[1]);
    expect(result[1]).to.be.at.least(result[2]);
  });
});
