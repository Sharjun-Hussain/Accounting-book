const TransactionModel = require('../Models/Transactions');



exports.FetchAllTransactions =  async function(req, res, next) {
    const Transactions = await TransactionModel.find();
    
    res.status(200).json({
        Success: true,
        Message: "Fetching Succesfull",
        Transactions,
    });
}

exports.AddTransaction =  async function(req, res, next) {

    const {FromAccount , ToAccount, Description, Amount , TransactionDate} = req.body
    const Transaction = await TransactionModel.create({Date:TransactionDate,Amount,Description,FromAccount,ToAccount})
    console.log(req.body);
    res.status(200).json({
        Success: true,
        Message: "Transaction Added Succefully",
        Transaction
        
    });


}