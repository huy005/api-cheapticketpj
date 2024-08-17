const { User, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { QueryTypes } = require("sequelize");

const register = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      phoneNumber,
      type: "client",
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      const isAuth = bcrypt.compareSync(password, user.password);
      console.log("isAuth: ", isAuth);
      if (isAuth) {
        const token = jwt.sign({ email: user.email, type: user.type }, "0987", {
          expiresIn: 60 * 60,
        });
        res.status(201).send(`${token}とともにログインしました。`);
      } else {
        res.status(500).send("アカウントかパスワードが正しくないです。");
      }
    }
    res.status(404).send("メールが見つからないです。");
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadAvatar = async (req, res) => {
  const { file } = req;
  const urlImage = `http://localhost:3000/${file.path}`;
  const { user } = req;
  const userFound = await User.findOne({
    where: {
      email: user.email,
    },
  });
  userFound.avatar = urlImage;
  await userFound.save();
  res.send(userFound);
};

const getAllTrip = async (req, res) => {
  try {
    const users = await sequelize.query(
      `select username as userName , depSta.name as departureStation , desSta.name as destinationStation
        from users
        inner join tickets on users.id = tickets.user_id
        inner join trips on trips.id = tickets.trip_id
        inner join stations as depSta on depSta.id = trips.departure
        inner join stations as desSta on desSta.id = trips.destination;`,
      {
        type: QueryTypes.SELECT,
      }
    );
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
  uploadAvatar,
  getAllTrip,
};
