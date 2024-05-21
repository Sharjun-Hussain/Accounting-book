const express = require('express');
const { login, register } = require('../Controllers/user');

const app = express();


app.route('/user/login').post(login);
app.route('/user/register').post(register);

module.exports = app