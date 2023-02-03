const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const path = require("path");
// const AdminBroMongoose = require('admin-bro-mongoose')
const uploadFeature = require("@admin-bro/upload");
// const mongoose = require('mongoose')
const mongooseAdminBro = require("@admin-bro/mongoose");
// AdminBro.registerAdapter(AdminBroMongoose)

// const adminBro = new AdminBro({
//   databases: [mongoose],
//   rootPath: '/admin',
// })
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
const Post = require("../models/Posts");
const Contact = require("../models/Contact");
AdminBro.registerAdapter(mongooseAdminBro);
// !
const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require("./actions/password.hook");

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require("./actions/upload.image.hook");
// !

const AdminBroOptions = {
  resources: [
    User,
    {
      resource: Post,
      options: {
        properties: {
          uploadImage: {
            components: {
              edit: AdminBro.bundle(
                "../../../components/profil-photo-edit.tsx"
              ),
              list: AdminBro.bundle('../../../components/upload-image.list.tsx'),
            },
          },
        },
        actions: {
          new: {
            after: async (response, request, context) => {
              const modifiedResponse = await passwordAfterHook(
                response,
                request,
                context
              );
              return uploadAfterHook(modifiedResponse, request, context);
            },
            before: async (request, context) => {
              const modifiedRequest = await passwordBeforeHook(
                request,
                context
              );
              return uploadBeforeHook(modifiedRequest, context);
            },
          },
          edit: {
            after: async (response, request, context) => {
              const modifiedResponse = await passwordAfterHook(
                response,
                request,
                context
              );
              return uploadAfterHook(modifiedResponse, request, context);
            },
            before: async (request, context) => {
              const modifiedRequest = await passwordBeforeHook(
                request,
                context
              );
              return uploadBeforeHook(modifiedRequest, context);
            },
          },
          show: {
            isVisible: false,
          },
        },
      },
    },
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
