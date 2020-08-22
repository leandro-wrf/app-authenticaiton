'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

class RegisterController {
  async store({ request, response }) {
    const data = request.only(['username', 'email', 'password']);

    const user = await User.create(data);

    return response.status(201).json(user);
  }
}

module.exports = RegisterController;
