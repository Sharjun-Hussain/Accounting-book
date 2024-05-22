const cookieParser = require("cookie-parser");
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
        if (!(await bcrypt.compare(Password, user.Password))) {
          return res.status(400).json({
            Message: "Invalid UserName OR Password",
          });
        }

        const generatedToken = user.generatejwtToken();
        res
          .status(200)
          .cookie("token", generatedToken, {
            httponly: true,
            sameSite: "strict",
            path: "/",
            maxAge: 900000,
          })
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
  const { Email, Password, OrganizationName, Phone, Name } = req.body;
  console.log(Name, Password, Phone, Email, OrganizationName);

  if (!Email || !Password || !OrganizationName || !Phone || !Name) {
    return res.status(400).json({
      Success: false,
      Message: "Please fill all required fields",
    });
  }

  const ExistingUser = await userModel.findOne({ Email });

  if (!ExistingUser) {
    const hashedPassword = await bcrypt.hash(Password, 10);
    const user = await userModel.create({
      Email: Email,
      Password: hashedPassword,
      OrganizationName: OrganizationName,
      Name: Name,
      Phone: Phone,
    });
    const generatedToken = await user.generatejwtToken();

    if (user) {
      res
        .status(201)
        .cookie("token", generatedToken, {
          httponly: true,
          sameSite: "strict",
          path: "/",
          maxAge: 900000,
        }).json({ message: " Your Account Creation SuccessFull! ",
          user
         });
    }
  }

  if (ExistingUser) {
    return res.status(404).json({
      Message: " User Already Found Please Sign In",
    });
  }
};

exports.signout = function (req, res, next) {
  res.status(200).cookie("token", "", { sameSite: "strict", path: "/" }).json({
    Success: true,
    Message: "Sign Out Successfull",
  });
};
