const UserModel = require("../models/User");
const ChemistModel = require("../models/Chemist");
const jwt = require("jsonwebtoken");
const { JWT_KEY, JWT_EXPIRES_IN } = require("../../../config/swagger/config");
module.exports = {
  Login: async function (req, res) {
    try {
      const { password, login } = req.body;
      if (!password || !login) {
        return res.status(412).send("login va parolni to'liq kiriting");
      }
      const user = await UserModel.findOne({
        email: login,
        password: password,
      }).select({ password: 0 });
      const chemist = await ChemistModel.findOne({
        login: login,
        password: password,
      }).select({ password: 0 });
      if (user) {
        const token = jwt.sign(
          Object.assign({ type: "user" }, user._doc),
          JWT_KEY,
          {
            algorithm: "HS256",
            expiresIn: JWT_EXPIRES_IN,
          }
        );
        return res.status(200).json({ token });
      } else if (chemist) {
        const token = jwt.sign(
          Object.assign({ type: "chemist" }, chemist._doc),
          JWT_KEY,
          {
            algorithm: "HS256",
            expiresIn: JWT_EXPIRES_IN,
          }
        );
        return res.status(200).json({ token });
      }
      return res.status(401).send("login yoki parol noto'g'ri");
    } catch (error) {
      return res.status(417).send("so'rov amalga oshmadi");
    }
  },
};
