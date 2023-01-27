const Model = require("../models/Contact");/*Contact model*/

async function get(req, res) {
  try {
    const step = req.query.step;
    const quantity = req.query.quantity;
    const report = await Model.find({})
      .skip((quantity - 1) * step)
      .limit(step);
    if (report.length > 0) {
      return res.status(200).send(report);
    } else {
      return res.status(404).send(report);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}
async function create(req, res) {
  try {
    console.log(req.body);
    const contact = await Model.create(req.body);
    return res.status(201).send(contact);
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = { get, create };
