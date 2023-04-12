//importar modulos

import express from "express";
import { Route } from "./routes";

//iniciamos los modulos
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//variables
const PORT = process.env.PORT || 3000;

//configurar rutas
app.use("/api", Route);
//levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor levantado en puerto ${PORT}`);
});
