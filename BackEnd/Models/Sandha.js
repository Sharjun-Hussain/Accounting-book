const mongoose = require('mongoose')

const SandhaSchema = new mongoose.Schema({
    MemberID:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'SandhaMembers',
        required : true
    },
    Amount:{
        type: String,
        required : true
    },
    Status:{
        type : String,
        required : true,
        default:"Completed"
    },
    Months :{
        type:[String],
        required:true
    },
    Date:{
        type:Date,
        required:true
    }
    
    
})


const Sandha = mongoose.model('Sandha', SandhaSchema);
module.exports = Sandha;