const authorize = (arrType) => (req, res, next) => {
  const { user } = req;
  if (arrType.findIndex((ele) => ele === user.type) > -1) {
    next();
  } else {
    res.status(403).send("ログインできたが、認可されてないです。");
  }
};

module.exports = {
  authorize,
};
