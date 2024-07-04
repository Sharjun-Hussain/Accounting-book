const express = require('express');
const { FetchAllTransactions, AddTransaction } = require('../Controllers/Transaction');
const { authentication } = require('../Middlewares/Authentication');

const App = express.Router();


App.route("/All").get(authentication, FetchAllTransactions);
App.route("/Add").post(authentication, AddTransaction);

module.exports = App;