var request = require('supertest');
var app = require('../../app');
var Student = require('../../models/student');

describe('students', function () {
  beforeEach(function (done) {
    Student.remove({}, function (err) {
      if (err) done(err);
      done();
    });
  });

  describe('GET /students', function () {
    it('responds with a 200 status code', function (done) {
      request(app).get('/students').expect(200, done);
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

      Student.collection.insert([student1, student2], function (err, students) {
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
          expect(response.body.errors).to.equal(undefined);
          expect(response.body.firstName).to.equal('Best');
          expect(response.body.lastName).to.equal('Student');
        })
        .end(done);
    });

    it('returns error if student obj is not valid', function (done) {
      request(app).post('/students')
        .send({
          lastName: 'Student',
          level: 2
        })
        .expect(function (response) {
          expect(response.body._id).to.not.exist;
          expect(response.body.errors).to.not.equal(undefined);
        })
        .end(done);
    });
  });

  describe('Show /students/:id', function(){
    it('responds with a student', function(done) {
      var student1 = {
        firstName: 'First',
        lastName: 'Student',
        level: 6
      };

      Student.collection.insert([student1], function (err, students) {
        request(app).get('/students/' + students.insertedIds[0])
          .expect(function(response){
            expect(response.status).to.equal(200);
            expect(response.body.firstName).to.equal(student1.firstName);
          }).end(done);
      });
    });

    it('returns an 404 status code if student not present', function(done) {
      request(app).get('/students/' + '57644839eaa3c3ab797d132c')
        .expect(function(response){
          expect(response.status).to.equal(404);
          expect(response.body).to.deep.equal({});
        }).end(done);
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

      Student.collection.insert([student1], function (err, students) {
        request(app).put('/students/' + students.insertedIds[0]).send(updatedStudent)
          .expect(function(response){
            expect(response.status).to.equal(200);
            expect(response.body).to.equal(true);
          }).end(done);
      });
    });
    it('returns a 404 status code if try to update a user that doesn\'t exist', function(done){
      var updatedStudent = {
        firstName: 'James',
        lastName: 'Dean',
        level: 12
      };

      request(app).put('/students/' + '57644839eaa3c3ab797d132f').send(updatedStudent)
        .expect(function(response){
          expect(response.status).to.equal(404);
      }).end(done);
    });
    it('returns a error if update a user with invalid params ', function(done){
      var student1 = {
        firstName: 'First',
        lastName: 'Student',
        level: 6
      };
      var updatedStudent = {
        lastName: 'Dean',
        level: 12
      };
      Student.collection.insert([student1], function (err, students) {
        console.log(students);
        request(app).put('/students/' + students.insertedIds[0]).send(updatedStudent)
          .expect(function(response){
            expect(response.body.errors).to.not.equal(null);
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

      Student.collection.insert([student1], function (err, students) {
        request(app).delete('/students/' + students.insertedIds[0])
          .expect(function(response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.equal(true);

            Student.findOne({_id: students.insertedIds[0]}, function(err, student){
              expect(student).to.equal(null);
            });
          }).end(done);
      });
    });
    it('returns a 404 if try to delete a student that doesn\'t exist', function(done) {
      request(app).delete('/students/' + '57644839eaa3c3ab797d132f')
      .expect(function(response) {
        expect(response.status).to.equal(404)
      }).end(done);

    });
  });
});
