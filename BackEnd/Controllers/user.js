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
            httpOnly: true,
            sameSite: "lax",
            secure: true, // true if using HTTPS
            path: "/",
            expires: new Date(Date.now() + 1000 * 24 * 60 * 60),
          })
          .json({
            Message: "Login SuccessFull",
            generatedToken,
            user,
          });
      } catch (err) {
        return res.status(500).json({
          Message: "Something went wrong with our site ",
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      Message: "Internal server Error",
    });
  }
};

exports.register = async function (req, res) {
  const { Email, Password, OrganizationName, Phone, Name } = req.body;


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
          httpOnly: true,
          sameSite: "strict",
          path: "/",
        })
        .json({ message: " Your Account Creation SuccessFull! ", user });
    }
  }

  if (ExistingUser) {
    return res.status(404).json({
      Message:
        "OOPS! You already have an account with that Email address please sign in",
    });
  }
};

exports.signout = function (req, res, next) {
  res.status(200).cookie("token", "").json({
    Success: true,
    Message: "Sign Out Successfull",
  });
};


exports.getuserprofile = async function (req, res, next) {
  const userID = req.id
  console.log(userID);

  if (!userID) {
    return res.status(401).json({
      message: "Unauthorized Access",
    })
  }
  const user = await userModel.findById(userID);

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  res.json(user);
}