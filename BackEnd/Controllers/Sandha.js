const SandhaModel = require('../Models/Sandha');




exports.FetchAllSandha = async (req, res, next) => {
  const AllSandhaDetails = await SandhaModel.find();

  res.status(200).json({
    Success: true,
    Message: " Sandha Details Fetching Succesfull",
    AllSandhaDetails,
  });
};



exports.AddSandha = async (req, res, next) => {
  const { PaidMonths, MemberID, Amount } = req.body;

  if (PaidMonths && MemberID  && Amount != "") {
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
    const {id} = req.params
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
