const Organization = require("../Models/Organization");

exports.Register = async function(req,res,next){
    const {Name,Address,Website,Email,Phone,} = req.body;

    if(!Name ||!Address ||!Website ||!Email ||!Phone){
        return res.status(401).json({Message:"Please Completly Fill THe Input Fields"});
    }

    const Organization = await Organization.create({Name,Address,Website,Email,Phone});

    res.status(201).json({
        Success: true,
        Message: "Organization Registration Succesfull",
        Organization
    });
}