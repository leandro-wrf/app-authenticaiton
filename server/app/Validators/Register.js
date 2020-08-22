'use strict';

class Register {
  get rules() {
    return {
      username: 'required',
      email: 'required|email',
      password: 'required',
    };
  }

  get validateAll() {
    return true;
  }
}

module.exports = Register;
