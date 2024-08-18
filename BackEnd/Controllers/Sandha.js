const SandhaModel = require("../Models/Sandha");
const AccountsModel = require("../Models/Accounts");
const Log = require("../Models/Log");
const AllLogs = require('../Models/AllLogs')
const MemberModel = require('../Models/SandhaMembers')

// Sandha/All
exports.FetchAllSandha = async (req, res, next) => {
  const AllSandhaDetails = await SandhaModel.find().populate({
    path: "MemberID",
    select: "Name , Phone , Address ",
  });

  res.status(200).json({
    Success: true,
    Message: " Sandha Details Fetching Succesfull",
    AllSandhaDetails,
  });
};

// Sandha/:Month
exports.FetchSpecicMonthSandhaDetails = async (req, res, next) => {
  const MonthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { Month } = req.params;

  if (MonthList.includes(Month)) {
    try {
      const AllSandhaDetails = await SandhaModel.aggregate([
        {
          $match: { PaidMonths: Month },
        },

        {
          $lookup: {
            from: "sandhamembers",
            localField: "MemberID",
            foreignField: "_id",
            as: "Data",
          },
        },
      ]);
      const SandhaSum = await SandhaModel.aggregate([
        {
          $match: { PaidMonths: Month },
        },
        {
          $group: {
            _id: null, // Group all documents together
            TotalAmount: { $sum: "$Amount" }, // Sum the 'Amount' field
          },
        },
      ]);

     
      res.status(200).json({
        Success: true,
        Message: "Sandha Details Fetching Successful",
        AllSandhaDetails,
        SandhaSum
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        Success: false,
        Message: "Internal Server Error",
      });
    }
  } else {
    res.status(400).json({
      Success: false,
      Message: "Bad Request",
    });
  }
};


// Sandha/Add
exports.AddSandha = async (req, res, next) => {
  const { PaidMonths, MemberID, Amount, Description } = req.body;

  if (PaidMonths && MemberID && Amount != "") {
    try {
      const Sandha = await SandhaModel.create({
        MemberID,
        Amount,
        PaidMonths,
      });

      const Member = await MemberModel.findById(MemberID);
      await AccountsModel.findOneAndUpdate(
        { Name: "cash" },
        { $inc: { Balance: Amount } }
      );
      await Log.create({
        Title: "Sandha",
        SandhaID: Sandha._id,
        Action: "Create",
      });

      await AllLogs.create({
        Title: "Sandha",
        SandhaID: Sandha._id,
        SandhaDetails:`Amount is : ${Amount}, Member Details are : ${Member}, Month is : ${PaidMonths}`,
        Action: "Create",
        Description: "Sandha Added ",
        AdminID:req.userid
      })

      res.status(201).json({
        Success: true,
        Message: "Sandha  Added Succefully",
        Sandha,
      });
    } catch (err) {
      res.status(500).json({
        Success: false,
        Message: "Internal Server Error",
        err,
      });
    }
  } else {
    res.status(400).json({
      Success: false,
      Message: "Fill All The Details Correctly",
    });
  }
};

exports.DeleteSandha = async (req, res, next) => {
  try {
    const { id } = req.params;
    const SandhaDetail = await SandhaModel.findById(id);
    if (!SandhaDetail) {
      res.status(400).json({
        Success: false,
        Message: "Sandha Information is  Not Found",
      });
      return;
    }

    const Member = await MemberModel.findById(SandhaDetail.MemberID);
    await AccountsModel.findOneAndUpdate(
      { Name: "cash" },
      { $inc: { Balance: -SandhaDetail.Amount } }
    );
    await Log.create({
      Title: "Sandha",
      SandhaID: id,
      Action: "Delete",
    });

    await AllLogs.create({
      Title: "Sandha",
      SandhaID: id,
      SandhaDetails:`Amount is : ${SandhaDetail.Amount}, Member Details are : ${Member}, Month is : ${SandhaDetail.PaidMonths}`,
      Action: "Delete",
      Description: "Sandha Deleted ",
      AdminID:req.userid
    })


    await SandhaModel.deleteOne({ _id: id });

    res.status(200).json({
      Success: true,
      Message: "Sandha Deleted Succefully",
    });
    return;
  } catch (err) {
    res.status(500).json({
      Success: false,
      Message: `Internal Server Error:${err.message}`,
    });
  }
};

exports.UpdateSandha = async (req, res) => {
  const { id } = req.params;
  const { Amount, Description, PaidMonths } = req.body;

  const SandhaDetail = await SandhaModel.findById(id);

  if (!SandhaDetail) {
    res.status(404).json({
      Success: false,
      Message: "Sandha  is Not Found",
    });
  }

  const Member = await MemberModel.findById(SandhaDetail.MemberID);

  const UpdatedSandha = await SandhaModel.findByIdAndUpdate(id, {
    Amount: Amount,
    Description: Description,
    PaidMonths: PaidMonths,
  });

  if (Amount > UpdatedSandha.Amount) {
    const IncrementAmount = Amount - UpdatedSandha.Amount;
    await AccountsModel.findOneAndUpdate(
      { Name: "cash" },
      { $inc: { Balance: IncrementAmount } }
    );
  }
  if (Amount < UpdatedSandha.Amount) {
    const DecrementAmount = UpdatedSandha.Amount - Amount;
    await AccountsModel.findOneAndUpdate(
      { Name: "cash" },
      { $inc: { Balance: -DecrementAmount } }
    );
  }

  await Log.create({
    Title: "Sandha",
    SandhaID: id,
    Action: "Update",
  });

  await AllLogs.create({
    Title: "Sandha",
    SandhaID: id,
    SandhaDetails:`Previous Amount is : ${SandhaDetail.Amount}, Update Amount is : ${Amount} , Member Details are : ${Member}, Previous Month is : ${SandhaDetail.PaidMonths}, Updated Paid Month is : ${PaidMonths}`,
    Action: "Update",
    Description: "Sandha Updated ",
    AdminID:req.userid
  })


  res.status(200).json({
    Success: true,
    Message: "Sandha Updated Succefully",
    UpdatedSandha,
  });
};
