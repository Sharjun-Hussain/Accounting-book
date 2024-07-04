const express = require('express');
const { login, register, signout } = require('../Controllers/user');

const app = express();


app.route('/user/login').post(login);
app.route('/user/register').post(register);
app.route('/user/signout').post(signout);
// app.route('/user/profile/:id').post(logout);

module.exports = app