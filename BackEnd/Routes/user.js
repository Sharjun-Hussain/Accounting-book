const express = require('express');
const { login, register, signout, getuserprofile, verifymail } = require('../Controllers/user');
const { authentication } = require('../Middlewares/Authentication');

const app = express();


app.route('/user/login').post(login);
app.route('/user/register').post(register);
app.route('/user/verify/email').post(verifymail);
app.route('/user/signout').get(authentication,signout);
 app.route('/user/profile').get(authentication, getuserprofile);

module.exports = app