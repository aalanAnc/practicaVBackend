// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { RestaurantModel } from "../db/restaurants.ts";

export const borrarRestauranteID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const borrarRestaurante = await RestaurantModel.findByIdAndDelete(id);
    if (!borrarRestaurante) {
      res.status(400).json({
        message:
          `No se ha encontrado el id por lo que no se ha borrado el restaurante`,
      });
    }
    res.status(200).json({ message: `Restaurante borrada` });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha podido eliminar el restaurante`,
    });
  }
};
