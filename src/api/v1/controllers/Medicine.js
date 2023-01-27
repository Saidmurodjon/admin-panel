const Model = require("./../models/Medicine");
const ChemistModel = require("./../models/Chemist");
// This is medicine controller
module.exports = {
  Get: async function (req, res) {
    try {
      const value = await Model.find().populate("author");
      return res.status(200).send(value);
    } catch (err) {
      res.status(400).send(err);
    }
  },
  //medicine is created
  Post: async function (req, res) {
    const { author } = req.body;
    // const authorId = req.query?.authorId;
    try {
      const chemist = await ChemistModel.findById({ _id: author });
      if (!author) {
        return res.status(401).send("Xatolik yuz berdi");
      }
      if (!chemist) {
        return res.status(401).send("Sizga ruhsat berilmagan");
      }
      console.log(chemist);
      const value = await Model.create(req.body);
      return res.status(201).send(value);
    } catch (err) {
      res.status(401).send("Yaratishda hatolik yuz berdi");
    }
  },
  // ? dori qidirish uchun
  Search: async function (req, res) {
    const { searchText } = req.body;
    // const authorId = req.query?.authorId;
    try {
      const result = await Model.find({
        title: { $regex: ".*" + searchText, $options: "i" },
      }).exec();
      if (!searchText) {
        return res.status(412).send("Qidiruv matni topilmadi");
      }
      if (result.length <= 0) {
        return res.status(404).send("So'ralgan ma'lumotlar topilmadi");
      }
      return res.status(200).send(result);
    } catch (err) {
      res.status(401).send("Qidirishda hatolik yuz berdi");
    }
  },
};
