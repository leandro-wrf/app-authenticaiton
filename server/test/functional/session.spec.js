const { test, trait } = use('Test/Suite')('');

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should return JWT token when session created', async ({ client, assert }) => {
  const user = await Factory
    .model('App/Models/User')
    .create({
      email: 'leandro@gmail.com',
      password: '123456'
    });

  const response = await client
    .post('/session')
    .send({
      email: 'leandro@gmail.com',
      password: '123456'
    }).end();

  response.assertStatus(200);
  assert.exists(response.body.token);
});
