const mongoose = require("mongoose");

const TransactionLogSchema = new mongoose.Schema({
  TransactionID: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"transaction",
    required: true,
  },

  Action: {
    type: String,
    required: true,
    enum: ["Create", "Delete","Modify"],
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now },
});



const TransactionLog = mongoose.model("TransactionLog", TransactionLogSchema);
module.exports = TransactionLog;
