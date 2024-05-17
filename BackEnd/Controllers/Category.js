const CategoryModel = require('../Models/Category')

exports.FetchCategories = async (req,res,next)=>{
    const Category = await CategoryModel.find();
console.log(Category);
    res.status(200).json({
        Success: true,
        Message: "Fetching Succesfull",
        Category,
    });
}

exports.CreateCategories = async (req,res,next)=>{

    const{ Name} =  req.body;
    const Category = await CategoryModel.create({Name});
console.log(Category);
    res.status(201).json({
        Success: true,
        Message: "Creating Accounting Category Succesfull",
        Category,
    });
}