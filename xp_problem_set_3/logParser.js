var fs = require('fs');

function LogParser(fileName){
  this.data =  fs.readFileSync(fileName, 'utf-8');
  this.data = this.data.split('\n');
  this.data.pop();
}
function findDate(line){
  return line.substring(4,14);
}

function getUniqueValues(value, index, data) {
    return data.indexOf(value) === index;
}

function linesToArray(data){
  return data.map(function(logLine){
    return logLine;
  });
}

LogParser.prototype.getDateRange = function () {
  return this.extractDates().filter(getUniqueValues);
};

LogParser.prototype.extractDates = function(){
  return linesToArray(this.data).map(function(logline){
    return findDate(logline);
  });
};

LogParser.prototype.getLogCount = function(data){
  return data.reduce(function(prev, curr){
    prev[curr] = (prev[curr] || 0) +1;
    return prev;
  }, {});
};

LogParser.prototype.logLevelCount = function(){
  var levelCount =  linesToArray(this.data).map(function(line){
    return line.substring(4,14) + " " + line.substring(39, 44);
  });
  return this.getLogCount(levelCount);
};

module.exports = LogParser;
