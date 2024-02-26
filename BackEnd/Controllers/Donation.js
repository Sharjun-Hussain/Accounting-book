const SandhaModel = require("../Models/Sandha");
const DonationModel = require("../Models/Donations");
const AccountsModel = require("../Models/Accounts");

// Sandha/All
exports.FetchAllDonation = async (req, res, next) => {
  const AllDonationDetails = await SandhaModel.find().populate({
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
exports.AddDonation = async (req, res, next) => {
  const { Name, MemberID, Amount, Category, Description, DonatedMonth } =
    req.body;

  if (DonatedMonth && Amount && Description && Category != null) {
    try {
      if (Name) {
        const Donation = await DonationModel.create({
          Name: Name,
          Category: Category,
          Amount: Amount,
          Description: Description,
          DonatedMonth: DonatedMonth,
        });
      }

      await AccountsModel.findOneAndUpdate(
        { Name: "cash" },
        { $inc: { Balance: Amount } }
      );

      res.status(201).json({
        Success: true,
        Message: "Donation  Added Succefully",
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

exports.DeleteDonation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const DonationDetail = await DonationModel.findById(id);
    if (!DonationDetail) {
      res.status(400).json({
        Success: false,
        Message: "Donation is  Not Found",
      });
      return;
    }
    await DonationDetail.deleteOne({ _id: id });

    res.status(200).json({
      Success: true,
      Message: "Sandha Deleted Succefully",
    });
    return;
  } catch (err) {
    res.status(500).json({
      Success: false,
      Message: "Internal Server Error",
    });
  }
};

exports.UpdateSandha = async (req, res, next) => {
  const { id } = req.params;

  const DonationDetail = await DonationDetail.findById(id);

  if (!DonationDetail) {
    res.status(404).json({
      Success: false,
      Message: "Donation is Not Found",
    });
  }
  await DonationDetail.findByIdAndUpdate(id, { re });

  res.status(200).json({
    Success: true,
    Message: "Donation Deleted Succefully",
    Member,
  });
};
