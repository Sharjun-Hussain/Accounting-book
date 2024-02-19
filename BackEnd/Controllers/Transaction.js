const TransactionModel = require('../Models/Transactions');



exports.FetchAllTransactions =  async function(req, res, next) {
    const Transactions = await TransactionModel.find();
    console.log(Transaction);
    res.status(200).json({
        Success: true,
        Message: "Fetching Succesfull",
        Transactions,
    });
}

exports.AddTransaction =  async function(req, res, next) {
    const Transaction = await TransactionModel.create(req.body);
    console.log(Transaction);
    res.status(200).json({
        Success: true,
        Message: "Transaction Added Succefully",
        Transaction,
    });

    
}