const { FetchAllDonation, AddDonation, DeleteDonation, UpdateDonation, FetchSpecicMonthDonationDetails, FetchSpecicMonthDonationSum } = require('../Controllers/Donation');


const express = require('express');
const app =express.Router();

app.route("/All").get(FetchAllDonation);
app.route("/Month/:Month").get(FetchSpecicMonthDonationDetails);
app.route("/Month/:Month/Sum").get(FetchSpecicMonthDonationSum);
app.route("/Add").post(AddDonation);
app.route("/Delete/:id").post(DeleteDonation);
app.route("/Update/:id").post(UpdateDonation);

module.exports = app