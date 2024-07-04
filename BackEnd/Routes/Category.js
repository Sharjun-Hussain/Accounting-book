const express = require('express');
const { FetchCategories, CreateCategories } = require('../Controllers/Category');
const { authentication } = require('../Middlewares/Authentication');

const App  = express.Router();

App.route('/All').get(authentication, FetchCategories)
App.route('/Add').get(authentication, CreateCategories)


module.exports = App