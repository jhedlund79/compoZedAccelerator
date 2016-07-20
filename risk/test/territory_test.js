var expect = require('chai').expect;
var Territory = require('../public/javascripts/territory');
var Player = require('../public/javascripts/player');


describe('territory', function(){
  var name = 'East Valley';
  var neighbors = [new Territory('West Valley'), new Territory('Scottsdale')];
  var owner = new Player();
  //can't directly use a Phaser obj here
  var phaserObj = new Object();

  it('has a name', function(){
    var territory = new Territory(name);
    expect(territory.name).to.equal(name);
  });

  it('has neighbors', function(){
    var territory = new Territory(name, neighbors);
    expect(territory.neighbors[0].name).to.equal('West Valley');
    expect(territory.neighbors[1].name).to.equal('Scottsdale');
  });

  it('has owner', function(){
    var territory = new Territory(name, neighbors);
    territory.updateOwner(owner);
    expect(territory.owner).to.be.an.instanceof(Player);
  });

  it('has a Phaser Polygon object', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.phaserObj).to.not.be.null;
    expect(territory.phaserObj).to.not.be.undefined;
  });

  it('adds infantry to the territory', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.infantry).to.equal(0);
    territory.updateInfantry(3);
    expect(territory.infantry).to.equal(3);
  });

  it('subtracts infantry from the territory', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.infantry).to.equal(0);
    territory.updateInfantry(5);
    territory.updateInfantry(-3);
    expect(territory.infantry).to.equal(2);
  });

  it('does not allow infantry numbers to go below zero', function(){
    var territory = new Territory(name, neighbors, phaserObj);
    expect(territory.infantry).to.equal(0);
    territory.updateInfantry(3);
    territory.updateInfantry(-4);
    expect(territory.infantry).to.equal(0);
  });
});
