const AccountsModel = require('../Models/Accounts')


exports.CreateAccount = async function (req, res, next) {
const {Name,Account} = req.body;

const Accounts = await AccountsModel.create({Name,Account});

res.status(201).json({
    Success: true,
    Message: "Account Created Successfully",
    Accounts
})
}