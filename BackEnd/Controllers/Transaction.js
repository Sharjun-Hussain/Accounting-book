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
    { $match: {} },
    {
      $lookup: {
        from: "transactions",
        localField: "TransactionID",
        foreignField: "_id",
        as: "Transaction",
      },
    },
    {
      $lookup: {
        from: "accounts",
        localField: "AccountID",
        foreignField: "_id",
        as: "Account",
      },
    },
  ]);
  res.status(200).json({
    Success: true,
    Message: "Fetching Succesfull",
    TransactionDetails,
  });
};

exports.AddTransaction = async function (req, res, next) {
  var { FromAccount, ToAccount, Description, Amount, TransactionDate } =
    req.body;

  if (!FromAccount || !ToAccount || !Amount || !TransactionDate) {
    res.status(400).json({
      Success: false,
      Message: "Please Fill All Fields",
    });
    return;
  }
  if (FromAccount == ToAccount) {
    res.status(400).json({
      Success: false,
      Message: "Can't complete the transaction because the account is already in use.",
    });
    return;
  }

  if (Amount == 0) {
    res.status(400).json({
      Success: false,
      Message: "Can't complete the transaction fund need to be greater than 0",
    });
    return;
  }
  const { Balance } = await AccountsModel.findById(FromAccount);
  if (Balance < Amount) {
    res.status(400).json({
      Success: false,
      Message: "You Don't have enough funds to complete the transaction.",
    });
    return;
  }
  const Transaction = await TransactionModel.create({
    Date: TransactionDate,
    Description: Description,
  });

  const SavedTransactionID = Transaction._id;

  const TransactionDetailsFrom = await TransactionDetailsModel.create({
    TransactionID: SavedTransactionID,
    Amount: Amount,
    AccountID: FromAccount,
    Type: "Debit",
  });

  const TransactionDetailsTo = await TransactionDetailsModel.create({
    TransactionID: SavedTransactionID,
    Amount: Amount,
    AccountID: ToAccount,
    Type: "Credit",
  });

  await AccountsModel.findByIdAndUpdate(FromAccount, {
    $inc: { Balance: -Amount },
  });
  await AccountsModel.findByIdAndUpdate(ToAccount, {
    $inc: { Balance: Amount },
  });

  await TransactionLog.create({
    TransactionID: SavedTransactionID,
    Action: "Create",
  });

  res.status(201).json({
    Success: true,
    Message: "Transaction completed Succefully.",
    Date: Transaction,
    TransactionDetailsFrom,
    TransactionDetailsTo,
  });
};
