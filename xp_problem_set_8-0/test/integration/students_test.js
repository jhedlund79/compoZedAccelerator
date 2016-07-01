var request = require('supertest');
var db = require('../../config/database');
var app = require('../../app');

var studentsCollection = db.get('students');

describe('students', function () {
  // beforeEach(function (done) {
  //   studentsCollection.remove({}, function (err) {
  //     if (err) done(err);
  //     done();
  //   });
  // });

  describe('GET /students', function () {
    it('responds with a 200 status code', function (done) {
      request(app).get('/students')
        .expect(200, done);
    });

    it('returns an array of JSON objects representing students in the database', function (done) {
      // ugly way to have test data, we could make a factory for this:
      var student1 = {
        firstName: 'First',
        lastName: 'Student',
        level: 6
      };

      var student2 = {
        firstName: 'Second',
        lastName: 'Pupil',
        level: 10
      }

      studentsCollection.insert([student1, student2], function (err, students) {
        if (err) done(err);

        request(app).get('/students')
          .expect(function (response) {
            expect(response.body).to.be.instanceOf(Array);

            expect(response.body[0].firstName).to.equal(student1.firstName);
            expect(response.body[0].lastName).to.equal(student1.lastName);
            expect(response.body[0].level).to.equal(student1.level);

            expect(response.body[1].firstName).to.equal(student2.firstName);
            expect(response.body[1].lastName).to.equal(student2.lastName);
            expect(response.body[1].level).to.equal(student2.level);
          })
          .end(done);
        });
    });
  });

  describe('POST /students', function () {
    it('responds with a 200', function (done) {
      request(app).post('/students')
          .expect(200, done);
    });

    it('responds with the object that was persisted', function (done) {
      request(app).post('/students')
        .send({
          firstName: 'Best',
          lastName: 'Student',
          level: 2
        })
        .expect(function (response) {
          expect(response.body._id).to.exist;
          expect(response.body.firstName).to.equal('Best');
          expect(response.body.lastName).to.equal('Student');
          expect(response.body.level).to.equal(2);
        })
        .end(done);
    });
  });

  describe('Get /students/:id', function(){
    it('responds with a student', function(done) {
      var student1 = {
        firstName: 'First',
        lastName: 'Student',
        level: 6
      };

      studentsCollection.insert([student1], function (err, students) {
        request(app).get('/students/' + students[0]._id)
          .expect(function(response){
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal(student1.firstName);
          }).end(done);
      });
    });
  });

  describe('update /students/:id', function(){
    it('updates a student', function(done) {
      var student1 = {
        firstName: 'First',
        lastName: 'Student',
        level: 6
      };

      var updatedStudent = {
        firstName: 'Second',
        lastName: 'Doe',
        level: 8
      };

      studentsCollection.insert([student1], function (err, students) {
        request(app).put('/students/' + students[0]._id).send(updatedStudent)
          .expect(function(response){
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal(updatedStudent.firstName);
          }).end(done);
      });
    });
  });

  describe('delete /students/:id', function(){
    it('deletes a student', function(done) {
      var student1 = {
        firstName: 'First',
        lastName: 'Student',
        level: 6
      };

      studentsCollection.insert([student1], function (err, students) {
        request(app).delete('/students/' + students[0]._id)
          .expect(function(response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.equal(true);

            studentsCollection.findOne({_id: students[0]._id}, function(err, student){
              expect(student).to.equal(null);
            });
          }).end(done);
      });
    });
  });


});
