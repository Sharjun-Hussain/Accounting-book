const { FetchAllSandha, AddSandha, DeleteSandha, UpdateSandha, FetchSpecicMonthSandhaDetails, FetchSpecicMonthSandhaSum } = require('../Controllers/Sandha');


const express = require('express');
const { authentication } = require('../Middlewares/Authentication');
const app =express.Router();

app.route("/All").get(authentication, FetchAllSandha);
app.route("/Month/:Month").get(authentication, FetchSpecicMonthSandhaDetails);
app.route("/Add").post(authentication, AddSandha);
app.route("/Delete/:id").delete(authentication, DeleteSandha);
app.route("/Update/:id").put(authentication, UpdateSandha);

module.exports = app