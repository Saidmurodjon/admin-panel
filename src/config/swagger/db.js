const mongoose = require("mongoose");
const { DB } = require("./config");

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
const conexion = mongoose.connection;

module.exports = conexion;
