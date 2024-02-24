const TransactionModel = require("../Models/Transactions");
const AccountsModel = require("../Models/Accounts");

exports.FetchAllTransactions = async function (req, res, next) {
  const Transactions = await TransactionModel.aggregate([
    {
      $match: {},
    },
    {
      $lookup: {
        from: "accounts",
        localField: "FromAccount",
        foreignField: "_id",
        as: "FromAccount",
      },
    },
    {
      $lookup: {
        from: "accounts",
        localField: "ToAccount",
        foreignField: "_id",
        as: "ToAccount",
      },
    },
  ]);

  res.status(200).json({
    Success: true,
    Message: "Fetching Succesfull",
    Transactions,
  });
};

exports.AddTransaction = async function (req, res, next) {
  var { FromAccount, ToAccount, Description, Amount, TransactionDate } =
    req.body;

    if(FromAccount==ToAccount){
      res.status(400).json({
        Success: false,
        Message: "Can't add transaction",
        
      });
      return;
    }
  const Transaction = await TransactionModel.create({
    Date: TransactionDate,
    Amount,
    Description,
    FromAccount,
    ToAccount,
  });


  await AccountsModel.findByIdAndUpdate(FromAccount,{$inc:{Balance:-Amount}})
  await AccountsModel.findByIdAndUpdate(ToAccount,{$inc:{Balance:Amount}})

  res.status(200).json({
    Success: true,
    Message: "Transaction Added Succefully",
    Transaction,
  });
};
