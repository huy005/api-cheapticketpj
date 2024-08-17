const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, "0987");
    console.log("decode: ", decode);
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send("ログインしてないです。");
    }
  } catch (error) {
    res.status(401).send("ログインしてないです。");
  }
};

module.exports = {
  authenticate,
};
