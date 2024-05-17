const express = require('express');
const { FetchCategories, CreateCategories } = require('../Controllers/Category');

const App  = express.Router();

App.route('/All').get(FetchCategories)
App.route('/Add').get(CreateCategories)


module.exports = App