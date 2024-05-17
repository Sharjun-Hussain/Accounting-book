const mongoose = require("mongoose");

const DonationsSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  MemberID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SandhaMembers",
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Category,
    required: true,
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
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now },
});

const Donations = mongoose.model("Donations", DonationsSchema);
module.exports = Donations;
