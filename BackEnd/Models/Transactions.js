const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    Date:{
        type: Date,
        required:true
    },
    
    Description:{
        type:String,

    },
    

})

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;