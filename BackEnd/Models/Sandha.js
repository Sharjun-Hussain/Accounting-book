const mongoose = require("mongoose");

const SandhaSchema = new mongoose.Schema({
  MemberID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SandhaMembers',
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
  createdAt: { type: Date, default: Date.now() , set: setDateOnly  },
  updatedAt: { type: Date, default: Date.now },
});


function setDateOnly(date) {
  // Extract only the date part from the current timestamp
  return new Date(date.toDateString());
}
const Sandha = mongoose.model("Sandha", SandhaSchema);
module.exports = Sandha;
