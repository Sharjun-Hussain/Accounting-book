const mongoose = require("mongoose");

const SandhaSchema = new mongoose.Schema({
  MemberID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SandhaMembers",
    required: true,
  },
  Amount: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
    default: "Completed",
  },
  PaidMonths: {
    type: [String],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Sandha = mongoose.model("Sandha", SandhaSchema);
module.exports = Sandha;
