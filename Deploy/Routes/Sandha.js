const { FetchAllSandha, AddSandha, DeleteSandha, UpdateSandha, FetchSpecicMonthSandhaDetails, FetchSpecicMonthSandhaSum } = require('../Controllers/Sandha');


const express = require('express');
const app =express.Router();

app.route("/All").get(FetchAllSandha);
app.route("/Month/:Month").get(FetchSpecicMonthSandhaDetails);
app.route("/Add").post(AddSandha);
app.route("/Delete/:id").delete(DeleteSandha);
app.route("/Update/:id").put(UpdateSandha);

module.exports = app