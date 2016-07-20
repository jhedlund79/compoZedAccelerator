function DiceEmulator(){
  this.currResult = [];
}

DiceEmulator.prototype.roll = function (diceToRoll) {
  var result = [];
  for(var i= 0; i < diceToRoll; i++){
    result.push(Math.floor((Math.random() * 6) + 1));
  }
  result = result.sort().reverse();
  this.currResult = result;
  return result;
};

module.exports = DiceEmulator;
