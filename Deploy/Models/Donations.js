const mongoose = require("mongoose");

const DonationsSchema = new mongoose.Schema({
  Name: {
    type: String,
    reuquired: true
  },
  
  Amount: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
  },
  DonatedMonth: {
    type: String,
    
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now },
});

const Donations = mongoose.model("Donations", DonationsSchema);
module.exports = Donations;
