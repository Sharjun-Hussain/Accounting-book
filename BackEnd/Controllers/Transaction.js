const TransactionModel = require("../Models/Transactions");
const AccountsModel = require("../Models/Accounts");

exports.FetchAllTransactions = async function (req, res, next) {
  const Transactions = await TransactionModel.find();

  res.status(200).json({
    Success: true,
    Message: "Fetching Succesfull",
    Transactions,
  });
};

exports.AddTransaction = async function (req, res, next) {
  var { FromAccount, ToAccount, Description, Amount, TransactionDate } =
    req.body;

  const Transaction = await TransactionModel.create({
    Date: TransactionDate,
    Amount,
    Description,
    FromAccount,
    ToAccount,
  });

  const FromAccountFromModel = await AccountsModel.findById(FromAccount);
  const ToAccountFromModel = await AccountsModel.findById(ToAccount);

  FromAccountFromModel.Balance -= Amount;
  ToAccountFromModel.Balance += Amount;

  FromAccountFromModel.save();
  ToAccountFromModel.save();

  res.status(200).json({
    Success: true,
    Message: "Transaction Added Succefully",
    Transaction,
  });
};
