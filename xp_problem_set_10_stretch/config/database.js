var monk = require('monk');

var dbName = 'people_' + (process.env.NODE_ENV || 'development');
module.exports = monk('localhost:27017/' + dbName);
