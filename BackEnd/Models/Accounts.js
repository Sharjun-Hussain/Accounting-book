const mongoose = require('mongoose')

const TrialBalanceSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Description:{
        type : String,
        required : true
    },
    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : true
    },
    Balance:{
        type : Number,
        required : true
    
    },
    
})


const TrialBalance = mongoose.model('TrialBalance', TrialBalanceSchema);
module.exports = TrialBalance;