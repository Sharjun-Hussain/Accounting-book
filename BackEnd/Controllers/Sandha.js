const SandhaModel = require("../Models/Sandha");

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

exports.FetchSpecicMonthSandhaDetails = async (req, res, next) => {
  const MonthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const { Month } = req.params;

  if (MonthList.includes(Month)) {
    try {
      const AllSandhaDetails = await SandhaModel.aggregate([
        { 
          $match: { PaidMonths: Month } 
        },
       
        {
          $lookup: {
            from: "sandhamembers",
            localField: "MemberID",
            foreignField: "_id",
            as: "Data",
          },
        }
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


exports.AddSandha = async (req, res, next) => {
  const { PaidMonths, MemberID, Amount } = req.body;

  if (PaidMonths && MemberID && Amount != "") {
    try {
      const Sandha = await SandhaModel.create({
        MemberID,
        Amount,
        PaidMonths,
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
        Message: "Sandha Detail is  Not Found",
      });
      return;
    }
    await SandhaModel.deleteOne({ _id: id });

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

  const SandhaDetail = await SandhaModel.findById(id);

  if (!SandhaDetail) {
    res.status(404).json({
      Success: false,
      Message: "Sandha Detail is Not Found",
    });
  }
  await SandhaModel.findByIdAndUpdate(id, { re });

  res.status(200).json({
    Success: true,
    Message: "Member Deleted Succefully",
    Member,
  });
};
