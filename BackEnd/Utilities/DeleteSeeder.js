const mongoose = require('mongoose');
const SandhaModel = require("../Models/Sandha");
const AccountsModel = require("../Models/Accounts");
const TransactionModel = require("../Models/Transactions");
const sandhamembersModel = require("../Models/Sandhamembers");
const DonationModel = require("../Models/Donations");
const LogModel = require("../Models/Log")


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


const DeleteDatabase = async () => {
    await SandhaModel.deleteMany();
    // await AccountsModel.deleteMany();
    await TransactionModel.deleteMany();
    // await sandhamembersModel.deleteMany();
    await DonationModel.deleteMany();
    await LogModel.deleteMany();

    console.log("Data Deleted Success");

}

DeleteDatabase();
