import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@8.0.1";

import { buscarClienteID } from "./resolvers/getClienteID.ts";
import { buscarRestauranteID } from "./resolvers/getRestauranteID.ts";
import { buscarReservaID } from "./resolvers/getReservaID.ts";
import { crearCliente } from "./resolvers/postCliente.ts";
import { crearRestaurante } from "./resolvers/postRestaurante.ts";
import { crearReserva } from "./resolvers/postReserva.ts";
import { borrarTodosRestaurantes } from "./resolvers/deleteRestaurantes.ts";
import { borrarReservaID } from "./resolvers/deleteReservaID.ts";
import { borrarRestauranteID } from "./resolvers/deleteRestauranteID.ts";

try {
  const MONGO_URL =
    "mongodb+srv://alananconaortiz:12345@practicav.sccu9bm.mongodb.net/ReservasRestaurante?retryWrites=true&w=majority";

  if (!MONGO_URL) {
    console.log("No se ha encontrado la url proporcionada para mongo");
  }
  const app = express();
  await mongoose.connect(MONGO_URL);

  app.use(express.json());

  app.get("/cliente/:id", buscarClienteID);
  app.get("/restaurante/:id", buscarRestauranteID);
  app.get("/reserva/:id", buscarReservaID);

  app.post("/cliente", crearCliente);
  app.post("/restaurante", crearRestaurante);
  app.post("/reserva", crearReserva);

  app.delete("/restaurante/:id", borrarRestauranteID);
  app.delete("/restaurante", borrarTodosRestaurantes);
  app.delete("/reserva/:id", borrarReservaID);

  app.listen(3000, () => {
    console.log(`Server abierto en el puerto 3000`);
  });
} catch (error) {
  console.log(error);
}
