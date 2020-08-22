'use strict';

const { test, trait } = use('Test/Suite')('Register user');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should register user', async ({ client, assert }) => {
  const response = await client
    .post('/register')
    .send({
      username: 'leandro',
      email: 'leandro@gmail.com',
      password: '1234567',
    })
    .end();

  response.assertStatus(201);
  assert.exists(response.body.id);
});
