const SandhaModel = require("../Models/Sandha");
const AccountsModel = require("../Models/Accounts");
const Log = require("../Models/Log");

// Sandha/All
exports.FetchAllSandha = async (req, res, next) => {
  const AllSandhaDetails = await SandhaModel.find().populate({
    path: "MemberID",
    select: "Name",
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
      console.log(AllSandhaDetails);
      res.status(200).json({
        Success: true,
        Message: "Sandha Details Fetching Successful",
        AllSandhaDetails,
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

// Sandha/:Month/Sum
exports.FetchSpecicMonthSandhaSum = async (req, res, next) => {
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
          $group: {
            _id: null, // Group all documents together
            TotalAmount: { $sum: "$Amount" }, // Sum the 'Amount' field
          },
        },
      ]);
      console.log(AllSandhaDetails);
      res.status(200).json({
        Success: true,
        Message: "Sandha Sum  Successful",
        AllSandhaDetails,
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

      await AccountsModel.findOneAndUpdate(
        { Name: "cash" },
        { $inc: { Balance: Amount } }
      );
      await Log.create({
        Title: "Sandha",
        SandhaID: Sandha._id,
        Action: "Create",
      });

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
    await AccountsModel.findOneAndUpdate(
      { Name: "cash" },
      { $inc: { Balance: -SandhaDetail.Amount } }
    );
    await Log.create({
      Title: "Sandha",
      DonationID: id,
      Action: "Delete",
    });
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
    DonationID: id,
    Action: "Update",
  });


  res.status(200).json({
    Success: true,
    Message: "Member Deleted Succefully",
    UpdatedSandha,
  });
};
