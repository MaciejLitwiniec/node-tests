const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        //.expect(200)
        .expect(404)
        // .expect('Hello world')
        // .expect({
        //   error: 'Page not found'
        // })
        .expect((res) => {
          //with this we can access headers, body
          //everything which comes from http response
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should fit requirements', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Maciej3',
            age: 31
          });
        })
        .end(done);
    });
  });
});
