require("dotenv").config();
const { env } = process;

module.exports = {
  PORT: env.PORT,
  DB: env.MONGODB_URL,
  ADMIN_EMAIL: env.ADMIN_EMAIL,
  ADMIN_PASSWORD: env.ADMIN_PASSWORD,
  ADMIN_COOKIE_NAME: env.ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_PASS: env.ADMIN_COOKIE_PASS,
  JWT_KEY: env.JWT_KEY,
  JWT_EXPIRES_IN:env.JWT_EXPIRES_IN
};
