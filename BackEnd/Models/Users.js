const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Password: {
    type: String,
    required: true,
    
  },
  Phone: {
    type: Number,
  },
  Role: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Verified :{
    type: Boolean,
    default: false,
  },

 OrganizationName: {
  type: String,
  
 },

});

AdminSchema.methods.generatejwtToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_SECRET_EXPIRES,
  });
};

AdminSchema.methods.isValidPassword = async function (Enteredpassword) {
  return await bcrypt.compare(Enteredpassword, this.password);
};

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
