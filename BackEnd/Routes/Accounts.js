const express = require('express');
const { CreateAccount, FetchAllAccounts } = require('../Controllers/Accounts');
const app = express.Router();


app.route('/Add').post(CreateAccount);
app.route('/All').get(FetchAllAccounts);

module.exports = app;
