import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

//Crear la app
const app = express();

//Conexion a la base de datos
try {
  await db.authenticate();
  console.log("conexion correcta a la db");
} catch (error) {
  console.log(error);
}

//habilitar pug
app.set("view engine", "pug");
app.set("views", "./views");

//Carpeta Publica
app.use(express.static("public"));

//Routing
app.use("/auth", usuarioRoutes);

//Defonir puerto y arrancarlo
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcinonando en le puerto ${port}`);
});
