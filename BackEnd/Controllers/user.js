const userModel = require("../Models/Users");
const bcrypt = require("bcryptjs");


exports.login = async function (req, res, next) {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res
      .status(400)
      .json({ Message: "Please Completly Fill THe Input Fields" });
  }

  try {
    const user = await userModel.findOne({ Email: Email });
    if (!user) {
      return res.status(400).json({
        Message: "User OR Password Incorrect",
      });
    }

    if (user) {
      try {
        if (!(await bcrypt.compare(Password,user.Password))) {
          return res.status(400).json({
            Message: "Invalid UserName OR Password",
          });
        }

        const generatedToken = user.generatejwtToken();
        res
          .status(200)
          .cookie("token", generatedToken, { httponly: true })
          .json({
            Message: "Login SuccessFull",
            generatedToken,
            user,
          });
      } catch (err) {}
    }
  } catch (err) {
    return res.status(500).json({
      Message: "Internal server Error",
    });
  }
};

exports.register = async function (req, res) {
  const { Email, Password } = req.body;
  console.log(Email, Password);
  if (!Email || !Password) {
    return res.status(400).json({
      Success: false,
      Message: "Email and Password are required",
    });
  }

  const ExistingUser = await userModel.findOne({ Email });

  if (!ExistingUser) {

    const hashedPassword = await bcrypt.hash(Password, 10);
    const user = await userModel.create({ Email: Email, Password: hashedPassword });
    const generatedToken = await user.generatejwtToken();

    if (user) {
      res.status(200).cookie("token", generatedToken, { httponly: true }).json({
        Message: " Your Account Creation SuccessFull! ",
        generatedToken,
      });
    }
  }

  if (ExistingUser) {
    return res.status(400).json({
      Message: " User Already Found Please Sign In",
    });
  }
};
