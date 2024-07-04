const { FetchAllDonation, AddDonation, DeleteDonation, UpdateDonation, FetchSpecicMonthDonationDetails, FetchSpecicMonthDonationSum } = require('../Controllers/Donation');


const express = require('express');
const { authentication } = require('../Middlewares/Authentication');
const app =express.Router();

app.route("/All").get(authentication, FetchAllDonation);
app.route("/Month/:Month").get(authentication, FetchSpecicMonthDonationDetails);
app.route("/Month/:Month/Sum").get(authentication, FetchSpecicMonthDonationSum);
app.route("/Add").post(authentication, AddDonation);
app.route("/Delete/:id").delete(authentication, DeleteDonation);
app.route("/Update/:id").put(authentication, UpdateDonation);

module.exports = app 
