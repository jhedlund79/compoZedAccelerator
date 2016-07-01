require('../helper')

var http= require('http'),
    db = require('../../config/database').get('albums'),
    server;

before(function() {
  server = http.createServer(require('../../app'))
  server.listen(0)
  browser.baseUrl = 'http://localhost:' + server.address().port
})

beforeEach(function() {
  db.remove({})
  db.insert({
    _id: "57687ae1e06ca81b9a0679d9",
    artist: "Led Zeppelin",
    albumName : "Coda",
    genre: "Rock",
    rating: "3",
    isExplicit: false
  })
  return browser.ignoreSynchronization = true;
})

after(function(){
  server.close()
})

describe('Albums CRUD', function(){
  describe('when I visit /', function(){
    it('shows the h1 indicating it is the albums home page', function(){
      browser.get('/')
      element(by.tagName('h1')).getText().then(function(text) {
        expect(text).to.equal('OMG Albums!');
      });
    })
  })
  describe('when I visit /albums', function(){
    it('shows a list of albums from the database', function(){
      browser.get('/albums');
      element.all(by.css('tbody td')).getText().then(function(text){
        expect(text[0]).to.equal('Rock');
        expect(text[1]).to.equal('Led Zeppelin');
        expect(text[2]).to.equal('Coda');
      });
    }); // it
    it('should have a link to create a new album that users can click', function(done) {
      browser.get('/albums');
      element(by.tagName('p')).click();
      browser.getCurrentUrl().then(function(url) {
        var path = '/' + url.split('/')[3] + '/' +  url.split('/')[4];
        expect(path).to.equal('/albums/new');
        done();
      });
    });
    it('should be able to click on a specific album to go to that albums page', function(done) {
      browser.get('/albums');
      element(by.css('td a')).click();
      browser.getCurrentUrl().then(function(url) {
        var path = '/' + url.split('/')[3] + '/' +  url.split('/')[4];
        expect(path).to.equal('/albums/57687ae1e06ca81b9a0679d9');
        done();
      });
    })
  }); // describe
  describe('when I visit /new', function(){
    it('indicates it is the edit page', function(){
      browser.get('albums/new')
      element(by.tagName('h1')).getText().then(function(text){
        expect(text).to.equal('Create album')
      })
    })// it
    it('has necessary form elements', function(){
      browser.get('albums/new')

      element(by.css('.albumName')).getAttribute('placeholder').then(function(value){

        expect(value).to.equal('Insert an Album Name')
      });
      element(by.css('.artist')).getAttribute('placeholder').then(function(value){

        expect(value).to.equal('Insert an Artist Name')
      });
      element(by.css('.genre')).getText().then(function(text){
        text = text.split('\n')
        expect(text[0]).to.equal('Select Genre')
      });
      element(by.css('.rating')).getText().then(function(text){
        expect(text).to.equal('Rate from 1 to 5')
      });
      element(by.css('.explicit')).getAttribute('value').then(function(val){
        expect(val).to.equal('Contains Explicit Lyrics')
      });
    }); // it
    it('relocates to /albums on form submit', function(){
      browser.get('albums/new')
      element(by.css('.submitButton')).click()
      browser.getCurrentUrl().then(function(url){
        expect(url).to.equal('http://localhost:' + server.address().port +'/albums')
      });
    });
    it('should successfully insert a new album', function(done) {
      browser.get('albums/new');
      var album = element(by.css('[name="albumName"]'));
      album.sendKeys('Running With Scissors');
      var artist = element(by.css('[name="artist"]'));
      artist.sendKeys('Weird Al Yankovic');
      var genre = element(by.css('.genre'));
      genre.$("[value='HipHop']").click();
      var rating = element.all(by.css('[type="radio"]'));
      rating.get(2).click();
      var explicit = element(by.css('.explicit'));
      explicit.click();
      var submit = element(by.css('.submitButton'));
      submit.click();
      browser.getCurrentUrl().then(function(url) {
        console.log(url);
        element.all(by.css('td a')).last().getText().then(function(text) {
          console.log(text);
          expect(url.split(browser.baseUrl)[1]).to.equal('/albums');
          done();
        });
      });
    });
  });//describe
  describe('when I visit albums/:id', function(){
    it('should see the name of the album in the header', function(done){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId);
      element(by.tagName('h1')).getText().then(function(text){
        expect(text).to.equal('Showing Album: Coda');
        done();
      });
    });
    it('should take the user to the edit page when the edit link is clicked', function(){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId);
      element(by.tagName('a')).click();
      browser.getCurrentUrl().then(function(url){
        expect(url.split(browser.baseUrl)[1]).to.equal('/albums/'+itemId+"/edit");
      });
    });
    it('should return to the albums page after the delete button is clicked', function(done){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId);
      element(by.tagName('input')).click();
      browser.getCurrentUrl().then(function(url){
        var baseUrl = browser.baseUrl;
        expect(url.split(baseUrl)[1]).to.equal('/albums');
        done();
      });
    });
  });
  describe('when I visit albums/:id/edit...', function() {
    it('should have the correct id in the url', function(done) {
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      browser.getCurrentUrl().then(function(url) {
        expect(url.split(browser.baseUrl)[1]).to.equal('/albums/'+itemId+'/edit');
        done();
      });
    });
    it('should have the artist pre populated', function(done) {
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      element(by.css('[name="artist"]')).getAttribute('value').then(function(value) {
        expect(value).to.equal('Led Zeppelin');
        done();
      });
    });
    it('should have the album name pre populated in the album field', function(done){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      element(by.css("[name='albumName']")).getAttribute('value').then(function(value){
        expect(value).to.equal('Coda');
        done();
      });
    });
    it('should have the genre pre-selected', function(done) {
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      element(by.css('.genre')).getAttribute('value').then(function(value) {
        expect(value).to.equal('Rock');
        done();
      });
    });
    it('should have the rating preselected', function(done){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      var radioBtn = element.all(by.css('[type="radio"]')).filter(function(elem) {
        return elem.getAttribute('checked').then(function(checked) {
          return checked === 'true';
        });
      });
      radioBtn.getAttribute('value').then(function(val) {
        expect(val[0]).to.equal('3');
        done();
      });
    });
    it('should return the user to the show page for the album being edited after update album is clicked', function(done){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      element(by.css('[type="submit"]')).click();
      browser.getCurrentUrl().then(function(url){
        expect(url.split(browser.baseUrl)[1]).to.equal('/albums/'+itemId);
        done();
      });
    });
    it('should return the user to the albums show page when click cancel on the edit page', function(done){
      var itemId = "57687ae1e06ca81b9a0679d9";
      browser.get('/albums/'+itemId+'/edit');
      element(by.tagName('a')).click();
      browser.getCurrentUrl().then(function(url){
        expect(url.split(browser.baseUrl)[1]).to.equal('/albums/'+itemId);
        done();
      });
    });
  }); // describe
}); // end
