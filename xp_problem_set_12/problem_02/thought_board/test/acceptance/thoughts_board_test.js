require('../helper');

var http = require('http'),
    server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Check that endpoints exist', function() {
  it('Should return \'Thoughts\' value for h1 value', function(done){
    browser.get('/thoughts');
    element(by.tagName('h1')).getText().then(function(text) {
      expect(text).to.equal('Thoughts')
      done();
    })
  })

})


// describe('Baseball card CRUD', function(){
//   describe('Given I visit /baseball_cards', function () {
//     it('Then I see a header indicating it is the Baseball Card Index', function() {
//       browser.get('/baseball_cards');
//       element(by.tagName('h1')).getText().then(function(text) {
//         expect(text).to.equal('Index of Baseball Cards');
//       });
//     });
//   });
// });
