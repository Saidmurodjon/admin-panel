const express = require("express");
const app = express();
const appRouter = require("./api/v1/routes/Router");
const admin = require("../src/api/v1/admin/Admin");
const conexion = require("./config/swagger/db");
const { PORT } = require("./config/swagger/config");
const cors = require("cors");
conexion.once("open", () => console.log("Conexión exitosa a MongoDB"));
conexion.on("error", () => console.log("El error de conexión es: " + error));

app.use(express.json());
app.use(cors());
app.use("/api", appRouter);
app.use("/admin", admin);
app.listen(PORT, () => {
  console.log(`¡Server UP! en http://localhost:${PORT}/admin`);
});
