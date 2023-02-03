const Model = require("../models/Posts");
// This is chemist model
module.exports = {
  Get: async function (req, res) {
    try {
      const value = await Model.find();

      return res.status(200).send(value);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  //Chemist is created
  Post: async function (req, res) {
    try {
      const value = await Model.create(req.body);
      return res.status(201).send(value);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
