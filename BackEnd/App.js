const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const App = express();
const dotenv = require("dotenv");
const cookieParcer = require("cookie-parser");
const path = require("path");

dotenv.config({ path: ".env" });

//Routes Import
const SandhaMembersRoute = require("./Routes/SandhaMembers");
const SandhaRoute = require("./Routes/Sandha");
const CategoryRoute = require("./Routes/Category");
const AccountsRoute = require("./Routes/Accounts");
const TransactionsRoute = require("./Routes/Transaction");
const UsersRoute = require("./Routes/user");
const DonationRoute = require("./Routes/Donation");
const { authentication } = require("./Middlewares/Authentication");

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

// async function ConnectDB() {
//   await mongoose
//     .connect("mongodb+srv://Joon:Joon@haadhiaccountingbook.x1byt6c.mongodb.net/?retryWrites=true&w=majority&appName=HaadhiAccountingBook")
//     .then((con) => {
//       console.log(`Database Connected ${con.Connection.name} `);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
ConnectDB();
App.use(express.json());
App.use(cookieParcer());
// App.use(
//   cors({
//     origin: "https://accounting.inzeedo.com",
//     credentials: true,
//   })
// );

App.use(cors({ origin: "http://localhost:5173", credentials: true })); //For Local
// App.use(cors({origin: "http://192.168.1.3:8081",credentials: true,})); //For Mobile App
App.use("/Sandha-members", authentication, SandhaMembersRoute);
App.use("/Sandha", SandhaRoute);
App.use("/Category", CategoryRoute);
App.use("/Accounts", AccountsRoute);
App.use("/Donations", DonationRoute);
App.use("/Transactions", TransactionsRoute);
App.use("/api", UsersRoute);

App.listen(8000, () => {
  console.log(`Server started on 8000`);
});
