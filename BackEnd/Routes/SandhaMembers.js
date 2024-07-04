const {
  AddSandhaMembers,
  DeleteSandhaMembers,
  UpdateSandhaMembers,
  FetchAllSandhaMembers,
  SearchSandhaMembers
} = require("../Controllers/SandhaMembers");

const express = require("express");
const { authentication } = require("../Middlewares/Authentication");
const app = express.Router();

app.route("/All").get(authentication, FetchAllSandhaMembers);
app.route("/Search").get(authentication, SearchSandhaMembers);
app.route("/Add").post(authentication, AddSandhaMembers);
app.route("/Delete/:id").delete(authentication, DeleteSandhaMembers);
app.route("/Update/:id").put(authentication, UpdateSandhaMembers);

module.exports = app