const { Station } = require("../models");
const { Op } = require("sequelize");

// Creating a object to model in db
const createStation = async (req, res) => {
  const { name, address, place } = req.body;
  try {
    const newStation = await Station.create({ name, address, place });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Getting all datas from db
const getAllStation = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const stations = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
        },
      });
      res.status(200).send(stations);
    } else {
      const stations = await Station.findAll();
      res.status(200).send(stations);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
// Getting a specific data from db
const getSpecificStation = async (req, res) => {
  const { id } = req.params;
  try {
    const station = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(200).send(station);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Updating
const updateStation = async (req, res) => {
  const { id } = req.params;

  const { name, address, place } = req.body;

  try {
    const updatingStation = await Station.findOne({
      where: {
        id,
      },
    });
    updatingStation.name = name;
    updatingStation.address = address;
    updatingStation.place = place;
    await updatingStation.save();
    res.status(200).send(updatingStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Deleting the data from db

const deleteStaion = async (req, res) => {
  const { id } = req.params;
  try {
    await Station.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("削除しました。");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
  getAllStation,
  getSpecificStation,
  updateStation,
  deleteStaion,
};
