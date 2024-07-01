const {
  AddSandhaMembers,
  DeleteSandhaMembers,
  UpdateSandhaMembers,
  FetchAllSandhaMembers,
  SearchSandhaMembers
} = require("../Controllers/SandhaMembers");

const express = require("express");
const app = express.Router();

app.route("/All").get(FetchAllSandhaMembers);
app.route("/Search").get(SearchSandhaMembers);
app.route("/Add").post(AddSandhaMembers);
app.route("/Delete/:id").delete(DeleteSandhaMembers);
app.route("/Update/:id").put(UpdateSandhaMembers);

module.exports = app