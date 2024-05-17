const mongoose = require("mongoose");

const SandhaSchema = new mongoose.Schema({
  MemberID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SandhaMembers',
    required: true,
  },
  Amount: {
    type: Number,
    required: true,
  },
  Status: {
    type: String,
    required: true,
    default: "Completed",
  },

  Description: {
    type: String,
    required: true,
    default: "Sandha Payment",
  },
  PaidMonths: {
    type: [String],
    required: true,
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});



const Sandha = mongoose.model("Sandha", SandhaSchema);
module.exports = Sandha;
