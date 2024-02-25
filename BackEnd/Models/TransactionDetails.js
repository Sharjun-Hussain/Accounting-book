const mongoose = require("mongoose");

const TransactionDetailsSchema = new mongoose.Schema({
  TransactionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transactions",
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Description: {
    type: String,
  },
  AccountID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Accounts",
    required: true,
  },
  Type: {
    type: String,
    enum:['Debit', 'Credit'],
    required: true,
  },
});

const TransactionDetails = mongoose.model(
  "TransactionDetails",
  TransactionDetailsSchema
);
module.exports = TransactionDetails;
