const mongoose = require("mongoose");

const TransactionDetailsSchema = new mongoose.Schema({
  TransactionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Transaction",
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
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
