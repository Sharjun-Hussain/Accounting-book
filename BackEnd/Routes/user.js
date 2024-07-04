const express = require('express');
const { login, register, signout, getuserprofile } = require('../Controllers/user');
const { authentication } = require('../Middlewares/Authentication');

const app = express();


app.route('/user/login').post(login);
app.route('/user/register').post(register);
app.route('/user/signout').post(signout);
 app.route('/user/profile').get(authentication, getuserprofile);

module.exports = app