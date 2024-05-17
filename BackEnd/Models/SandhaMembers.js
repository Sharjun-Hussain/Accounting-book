const mongoose = require('mongoose')

const SandhaMemberSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Address:{
        type : String,
        required : true
    },
    Phone:{
        type : Number,
        required : true
    },
    Amount:{
        type : Number,
        required : true
    },
    Email:{
        type:String,
        
    }
})


const SandhaMembers = mongoose.model('SandhaMembers', SandhaMemberSchema);
module.exports = SandhaMembers;