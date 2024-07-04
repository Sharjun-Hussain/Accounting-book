const mongoose = require("mongoose");

const AllLogsSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },

  TransactionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "transaction",
  },
  TransactionDetails: {
    type: String,
    //From To Amount Who DAte 
  },

  SandhaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sandha",
  },
  SandhaDetails: {
    type: String,
    // Amount Date Who Member Details (Name Id , Address ,Phone Number)
  },
  DonationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "donations",
  },
  DonationDetails: {
    type: String,
    // Amount Date Who Donator Details (Name Id , Address ,Phone Number)
  },

  SandhaMembersID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sandhamembers",
  },
  SandhaMembersDetails: {
    type: String,
    // Amount Date Who Member Details (Name Id , Address ,Phone Number)
  },

  Action: {
    type: String,
    required: true,
    enum: ["Create", "Delete", "Update"],
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now },
});

const AllLogs = mongoose.model("AllLogs", AllLogsSchema);
module.exports = AllLogs;
