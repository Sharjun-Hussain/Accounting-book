const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const App = express();

//Routes Import
const SandhaMembersRoute = require('./Routes/SandhaMembers')

async function ConnectDB() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/HaadhiAccountingBook")
    .then((con) => {
      console.log(`Database Connected ${con.Connection.name} `);
    })
    .catch((err) => {
      console.log(err);
    });
}

 ConnectDB();
App.use(express.json());
App.use(cors());
App.use("/Sandha-members",SandhaMembersRoute)
App.use("/Sandha",SandhaMembersRoute)

App.listen(8000, () => {
  console.log(`Server started on 8000`);
});
