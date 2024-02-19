const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    Date:{
        type: Date,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    Description:{
        type:String,

    },
    FromAccount:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Accounts',
        required:true
    },
    ToAccount:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Accounts',
        required:true
    }

})

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;