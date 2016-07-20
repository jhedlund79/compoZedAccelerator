var expect = require('chai').expect;

var Battle = require('../public/javascripts/battle');
var Territory = require('../public/javascripts/territory');

describe('Battle', function(){
  it('determines the winner of a battle', function(){
      var east = new Territory('East');
      east.updateInfantry(4);
      var west = new Territory('West');
      west.updateInfantry(3);

      var battle = new Battle();
      // var attackerRoll = battle.getAttackerRoll(east.infantry);
      // console.log("attackerRolls: ", attackerRoll);
      // var defenderRoll = battle.getDefenderRoll(west.infantry);
      // console.log("defenderRolls: ", defenderRoll);
      var result = battle.solveBattle(east, west);
      console.log(result);
  });
});
