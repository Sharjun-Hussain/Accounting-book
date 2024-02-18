const express = require('express');
const { CreateAccount } = require('../Controllers/Accounts');
const app = express.Router();


app.route('/Add').post(CreateAccount);
app.route('/All').post(CreateAccount);

module.exports = app;
