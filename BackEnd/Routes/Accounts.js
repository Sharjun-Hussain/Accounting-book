const express = require('express');
const { CreateAccount, FetchAllAccounts, FetchAccountsSum } = require('../Controllers/Accounts');
const app = express.Router();


app.route('/Add').post(CreateAccount);
app.route('/All').get(FetchAllAccounts);
app.route('/:Account').get(FetchAccountsSum);

module.exports = app;
