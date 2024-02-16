const mongoose = require('mongoose')

const DonationsSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Category:{
        type: mongoose.Schema.Types.ObjectId,
        ref : Category,
        required : true
    },
    Amount:{
        type : Number,
        required : true
    },
    Description:{
        type:String,
    },
    Date:{
        type:Date,
        required:true
    }
    
})


const Donations = mongoose.model('Donations', DonationsSchema);
module.exports = Donations;