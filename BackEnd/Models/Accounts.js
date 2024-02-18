const mongoose = require('mongoose')

const AccountsSchema = new mongoose.Schema({
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
        required : true,
        default: 0
    
    },
    
})


const Accounts = mongoose.model('Accounts', AccountsSchema);
module.exports = Accounts;