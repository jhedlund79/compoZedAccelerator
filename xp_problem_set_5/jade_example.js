var http = require('http'),
    monk = require('monk'),
    jade = require('jade');

var db = require('monk')('localhost/record_query_string_parameters'),
    queryStringCollection = db.get('query_strings');

// present documents before sending to view for rendering
function presentDocs (documents) {
  var output = [];
  documents.forEach(function (doc) {
    var documentDetails = [];
    for (var key in doc) {
      documentDetails.push(key + ' => ' + doc[key]);
    }
    output.push(documentDetails.join(', '));
  });
  return output;
}

function handleRequest (req, res) {
  if (req.url == '/favicon.ico') {
    res.end();
    return;
  }

  var parts = req.url.split('?')[1].split('&'),
      serialized = parts.reduce(function (serialized, pairs) {
        var propAndVal = pairs.split('=');
        serialized[propAndVal[0]] = propAndVal[1];
        return serialized;
      }, {});

  queryStringCollection.insert(serialized, function (err, doc) {
    if (err) throw err;

    // Asynchronous call to Monk return all documents in `query_strings`
    queryStringCollection.find({}, function (err, docs) {
      if (err) throw err;

      // Compile file with jade, this produces a function
      // {pretty: true} will produce nicely spaced/indented HTML
      var compiledTemplate = jade.compileFile('./example.jade', {pretty: true});
      // Render jade template, passing in local values
      var rendered = compiledTemplate({queryStrings: presentDocs(docs)});
      // End response stream with rendered content
      res.end(rendered);
    });
  });
}

http.createServer(handleRequest).listen(3000);

