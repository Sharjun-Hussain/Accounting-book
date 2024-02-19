const express = require('express');
const { FetchAllTransactions, AddTransaction } = require('../Controllers/Transaction');

const App = express.Router();


App.route("/All").get(FetchAllTransactions);
App.route("/Add").get(AddTransaction);