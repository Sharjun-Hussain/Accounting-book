const cookieParser = require("cookie-parser");
const userModel = require("../Models/Users");
const bcrypt = require("bcryptjs");
const mail = require("../Services/EmailService");
const jwt = require("jsonwebtoken");

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

    if (user.Verified) {
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
        .json({Message: "Login SuccessFull",generatedToken,user,});
    }

  } catch (err) {
    return res.status(500).json({
      Message: "Internal server Error",
    });
  }
};

exports.register = async function (req, res) {
  const { Email, Password, Phone, Name } = req.body;

  if (!Email || !Password || !Phone || !Name) {
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
      Name: Name,
      Phone: Phone,
    });
    const generatedToken = await user.generatejwtToken();

    //Mail to verify the Email

    const verificationtoken = await jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30s" }
    );
    const verificationUrl = `${process.env.CLIENT_URL}/verify/${verificationtoken}`;

    const subject = "Email Verification";
    const to = Email;
    const message = `
<p>Subject: Verify Your Email Address</p>

<p>Dear User,</p>

<p> Please verify your email address by clicking the link below:</p>

<p><a href="${verificationUrl}">Verify Email</a></p>

<p>If you did not request this verification, please ignore this email.</p>

<p>Best regards,</p>
<p>Sharjun Hussain</p>
<p>Inzeedo</p>
<p>For More Details: +94757340891</p>
`;

    await mail(subject, to, message);

    if (user) {
      res
        .status(201)
        // .cookie("token", generatedToken, {
        //   httpOnly: true,
        //   sameSite: "strict",
        //   path: "/",
        // })
        .json({
          message: " Your Account Creation SuccessFull! ",
          verificationUrl,
          verificationtoken,
        });
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
  res.status(200).clearCookie("token").json({
    Success: true,
    Message: "SignOut Successfull",
  });
};

exports.getuserprofile = async function (req, res, next) {
  const userID = req.id;

  if (!userID) {
    return res.status(401).json({
      message: "Unauthorized Access",
    });
  }
  const user = await userModel.findById(userID);

  if (!user) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }
  res.json(user);
};

exports.verifymail = async (req, res, next) => {
  const { Token } = req.body;
  if (!Token) {
    return res.status(400).json({ message: "Invalid verification link" });
  }

  await jwt.verify(Token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({
        message: "Token Expired",
      });
    }

    req.id = decodedToken.id;
  });
  const verifiedUser = await userModel.findByIdAndUpdate(req.id, {
    Verified: true,
  });

  if (!verifiedUser) {
    return res.status(400).json({
      message: "User Not Found",
    });
  }

  const generatedToken = verifiedUser.generatejwtToken();

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
      message: "Email Verification Successfull",
      verifiedUser,
    });
};
