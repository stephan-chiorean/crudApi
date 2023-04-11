import request from 'supertest';

import app from '../../app';
import { Todos } from './todos.model';

beforeAll(async () => {
  try {
    await Todos.drop()
  } catch (err) {}
})

describe('GET /api/v1/todos', () => {
  it('responds with an array of Todo objects', async() => {
    await request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveProperty('length');
        expect(res.body.length).toBe(0);
      })
  });
});

describe('POST /api/v1/todos', () => {
  it('responds with an Error if the todo is invalid', async() => {
    await request(app)
      .post('/api/v1/todos')
      .set('Accept', 'application/json')
      .send({
        content: '',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.message).toHaveProperty('length');
      })
  });
});


