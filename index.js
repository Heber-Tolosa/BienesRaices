import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

//Crear la app
const app = express();

//habilitar pug
app.set("view engine", "pug");
app.set("views", "./views");

//Routing
app.use("/auth", usuarioRoutes);

//Defonir puerto y arrancarlo
const port = 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcinonando en le puerto ${port}`);
});
