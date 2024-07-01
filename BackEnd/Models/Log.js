const mongoose = require("mongoose");

const TransactionLogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {},

  TransactionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "transaction",
  },

  SandhaID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sandha",
  },
  DonationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "donations",
  },
  

  Action: {
    type: String,
    required: true,
    enum: ["Create", "Delete", "Update"],
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now },
});

const TransactionLog = mongoose.model("Log", TransactionLogSchema);
module.exports = TransactionLog;
