const jwt = require('jsonwebtoken');

exports.authentication = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: 'Authentication Failed',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({
        message: 'Authentication Failed',
      });
    }

    req.id = decodedToken.id;
    next();
  });
};
