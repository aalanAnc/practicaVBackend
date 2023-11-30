// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { RestaurantModel } from "../db/restaurants.ts";

export const buscarRestauranteID = async (res: Response, req: Request) => {
  try {
    const { id } = req.params;
    const restauranteID = await RestaurantModel.findById(id);
    if (!restauranteID) {
      return res.status(400).json({
        message: `No se ha encontrado el restaurante por ese id`,
      });
    }
    res.status(200).json({ restauranteID });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha podido encontrar el restaurante`,
    });
  }
};
