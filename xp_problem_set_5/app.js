var http = require('http');
var monk = require('monk');
var pug = require('pug');

var db = require('monk')('localhost/cars'),
         carCollection = db.get('car_collection');

function requestHandler (req, res){
  if(req.url === '/favicon.ico'){
    res.end();
    return;
  }

  if(req.url === '/cars/new'){
    var compiledTemplate = pug.compileFile('views/add_car.pug', {pretty: true});
    var rendered = compiledTemplate({});
    res.end(rendered);
  }

  if(req.url == '/cars'){
    if(req.method === 'POST'){
      req.on('data', function(data){
        var inputs = data.toString().split('&');
        var serialized = inputs.reduce(function(serialized, pairs){
          var makeAndModel = pairs.split('=');
          serialized[makeAndModel[0]] = makeAndModel[1];
          return serialized;
        }, {});

        carCollection.insert(serialized, function(err, doc){
        if(err) throw err;

        });
        carCollection.find({}, function(err, data){
          var allCars = data;
          var compiledTemplate = pug.compileFile('views/cars.pug', {pretty: true});
          var rendered = compiledTemplate({cars: allCars});
          res.end(rendered);
        });
      });
    }
  }
}
http.createServer(requestHandler).listen(3000);
