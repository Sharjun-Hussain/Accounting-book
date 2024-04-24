const express = require('express');
const { CreateAccount, FetchAllAccounts, FetchAccountsSum, DeleteAccount } = require('../Controllers/Accounts');
const app = express.Router();


app.route('/Add').post(CreateAccount);

app.route('/All').get(FetchAllAccounts);
app.route('/:Account/Sum').get(FetchAccountsSum);
app.route('/:Account/Delete').post(DeleteAccount);

module.exports = app;
