/**
 * Para borrar todos los elementos he usado la funcion deleteMany()
 * Lo encontre:
 * https://www.geeksforgeeks.org/mongoose-deletemany-function/
 */
// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { RestaurantModel } from "../db/restaurants.ts";

export const borrarTodosRestaurantes = async (req: Request, res: Response) => {
  try {
    await RestaurantModel.deleteMany({});
    res.status(200).json({
      message: "Todos los restaurantes han sido eleminados",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha podido eliminar la reserva`,
    });
  }
};
