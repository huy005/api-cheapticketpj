const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = req.params;
    // kiểm tra xem station có tồn hay ko
    const obj = await Model.findOne({
      where: {
        id,
      },
    });
    if (obj) {
      next();
    } else {
      res.status(404).send(`${id}を持った対象が見つからないです。`);
    }
  };
};

module.exports = {
  checkExist,
};
