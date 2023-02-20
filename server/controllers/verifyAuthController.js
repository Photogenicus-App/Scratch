const jwt = require('jsonwebtoken');
//middleware
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log(typeof authHeader);
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) return res.status(403).json('Invalid Token');
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json('not authenticated');
  }
};
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Unauthorized');
    }
  });
};
const verifyTokenAndAuthorizationAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json('Unauthorized Admin');
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAuthorizationAndAdmin,
};
