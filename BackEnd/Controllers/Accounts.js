const AccountsModel = require("../Models/Accounts");

exports.CreateAccount = async function (req, res, next) {
  const { Name, Category,Description } = req.body;

  if (Name && Category && Description !== "") {
    try {
      const Account = await AccountsModel.create({
        Name,
        Category,
        Description
      });
      res.status(201).json({
        Success: true,
        Message: "Account Created Succefully",
        Account,
      });
    } catch (err) {
      res.status(500).json({
        Success: false,
        Message: "Internal Server Error",
        err,
      });
    }
  } else {
    res.status(400).json({
      Success: false,
      Message: "Fill All The Details Correctly",
    });
  }
};

exports.FetchAllAccounts = async function (req, res, next) {
  const Accounts = await AccountsModel.find();
  try {
    res.status(200).json({
      Success: true,
      Message: "Accounts Fetching Succefully",
      Accounts,
    });
  } catch (err) {
    res.status(500).json({
      Success: false,
      Message: "Internal Server Error",
      err,
    });
  }
};
