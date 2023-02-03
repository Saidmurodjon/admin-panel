const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");

const mongooseAdminBro = require("@admin-bro/mongoose");
const {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_PASS,
} = require("../../../config/swagger/config");

const ADMIN = {
  email: ADMIN_EMAIL,
  password: ADMIN_PASSWORD,
};
// Modeles
const User = require("../models/User");
const Contact = require("../models/Contact");
const Post = require("./uploader/PostUploader");
AdminBro.registerAdapter(mongooseAdminBro);

const AdminBroOptions = {
  resources: [
    User,
    Post,
    {
      resource: Contact,
      options: {
        properties: {
          message: {
            type: "richtext",
          },
        },
      },
    },
  ],
  branding: {
    companyName: "OPTIMUM",
    softwareBrothers: false,
    logo: "/public/img/logo.png",
    favicon: "/public/img/favicon.webp", // OR false to hide the default one
  },
  locale: {
    translations: {
      messages: {
        loginWelcome: "Administration Panel - Login", // the smaller text
      },
      labels: {
        loginWelcome: "OPTIMUM DEV", // this could be your project name
      },
    },
  },
};

const adminBro = new AdminBro(AdminBroOptions);

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword:
    ADMIN_COOKIE_PASS ||
    "supersecret-and-long-password-for-a-cookie-in-the-browser",
  authenticate: async (email, password) => {
    if (ADMIN_EMAIL === email && ADMIN_PASSWORD === password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
