const TransactionModel = require("../Models/Transactions");
const AccountsModel = require("../Models/Accounts");
const TransactionDetailsModel = require("../Models/TransactionDetails");
const TransactionLog = require("../Models/TransactionLog");

exports.FetchAllTransactions = async function (req, res, next) {
  // const Transactions = await TransactionModel.aggregate([
  //   {
  //     $match: {},
  //   },
  //   {
  //     $lookup: {
  //       from: "accounts",
  //       localField: "FromAccount",
  //       foreignField: "_id",
  //       as: "FromAccount",
  //     },
  //   },
  //   {
  //     $lookup: {
  //       from: "accounts",
  //       localField: "ToAccount",
  //       foreignField: "_id",
  //       as: "ToAccount",
  //     },
  //   },
  // ]);


  const TransactionDetails = await TransactionDetailsModel.aggregate([
    {$match:{}},
    {$lookup:{
      from: "transaction",
      localField: "TransactionID",
      foreignField: "_id",
      as: "TransactionDetails",
    }},
    {
      $lookup: {
        from: "accounts",
        localField: "AccountID",
        foreignField: "_id",
        as: "AccountDetails",
      },
    }
  ])
  res.status(200).json({
    Success: true,
    Message: "Fetching Succesfull",
    TransactionDetails
    
  });
};

exports.AddTransaction = async function (req, res, next) {
  var { FromAccount, ToAccount, Description, Amount, TransactionDate } =
    req.body;

  if (FromAccount == ToAccount) {
    res.status(400).json({
      Success: false,
      Message: "Can't add transaction",
    });
    return;
  }

  if (Amount == null) {
    res.status(400).json({
      Success: false,
      Message: "Can't add transaction",
    });
    return;
  }
  const Transaction = await TransactionModel.create({
    Date: TransactionDate,
    Description,
  });

  const TransactionID = Transaction._id;

  const TransactionDetailsFrom = await TransactionDetailsModel.create({
    TransactionID,
    Amount,
    FromAccount,
  });

  const TransactionDetailsTo = await TransactionDetailsModel.create({
    Amount,
    ToAccount,
    TransactionID,
    Type: "Credit",
  });

  await AccountsModel.findByIdAndUpdate(FromAccount, {
    $inc: { Balance: -Amount },
  });
  await AccountsModel.findByIdAndUpdate(ToAccount, {
    $inc: { Balance: Amount },
  });


  await TransactionLog.create({TransactionID:{TransactionID},Action:"Create"})

  res.status(201).json({
    Success: true,
    Message: "Transaction Added Succefully",
    Transaction,
    TransactionDetailsFrom,
    TransactionDetailsTo,
  });
};
