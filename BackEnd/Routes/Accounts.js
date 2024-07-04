const express = require('express');
const { CreateAccount, FetchAllAccounts, FetchAccountsSum, DeleteAccount } = require('../Controllers/Accounts');
const { authentication } = require('../Middlewares/Authentication');
const app = express.Router();


app.route('/Add').post(CreateAccount);

app.route('/All').get( FetchAllAccounts);
app.route('/:Account/Sum').get(authentication, FetchAccountsSum);
app.route('/Delete/:id').get(authentication,DeleteAccount);

module.exports = app;
