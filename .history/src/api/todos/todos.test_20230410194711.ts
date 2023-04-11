import request from 'supertest';

import app from '../../app';

describe('GET /api/v1/todos', () => {
  it('responds with an array of Todo objects', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: 'API - 👋🌎🌍🌏',
      }, done);
  });
});
