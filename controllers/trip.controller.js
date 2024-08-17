const { Trip, Station } = require("../models");

const createTrip = async (req, res) => {
  const { departure, destination, startingTime, price } = req.body;
  try {
    const newTrip = await Trip.create({
      departure,
      destination,
      startingTime,
      price,
    });
    res.status(201).send(newTrip);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllTrip = async (req, res) => {
  try {
    const tripList = await Trip.findAll({
      include: [
        {
          model: Station,
          as: "from",
        },
        {
          model: Station,
          as: "to",
        },
      ],
    });
    res.status(200).send(tripList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTrip = async (req, res) => {
  const { id } = req.params;
  try {
    await Trip.destroy({
      where: {
        id,
      },
    });
    res.send(`${id}を持った旅が削除されました。 `);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { departure, destination, startingTime, price } = req.body;
  try {
    await Trip.update(
      { departure, destination, startingTime, price },
      {
        where: {
          id,
        },
      }
    );
    res.send(`${id}を持った旅が更新されました。 `);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
};
