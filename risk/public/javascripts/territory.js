function Territory(name, neighbors, phaserObj){
  this.name = name;
  this.neighbors = neighbors;
  this.phaserObj = phaserObj;
  this.owner = null;
  this.infantry = 0;
}

Territory.prototype.updateOwner = function (owner) {
  this.owner = owner;
};

Territory.prototype.updateInfantry = function (infantry) {
  this.infantry += infantry;
  if(this.infantry < 0) this.infantry = 0;
};

module.exports = Territory;
