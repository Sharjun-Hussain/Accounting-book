const express = require('express');
const { login, register, signout } = require('../Controllers/user');

const app = express();


app.route('/user/login').post(login);
app.route('/user/register').post(register);
app.route('/user/signout').post(signout);

module.exports = app