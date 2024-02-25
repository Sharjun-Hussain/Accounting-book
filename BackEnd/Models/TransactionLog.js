const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  TransactionID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  Action: {
    type: String,
    required: true,
    enum: ["Credit", "Debit"],
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now },
});
