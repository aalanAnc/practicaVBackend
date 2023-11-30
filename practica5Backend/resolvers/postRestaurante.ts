// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { RestaurantModel } from "../db/restaurants.ts";

export const crearRestaurante = async (req: Request, res: Response) => {
  try {
    const { name, CIF, address } = req.body;
    const newRestaurante = new RestaurantModel({
      name,
      CIF,
      address,
    });
    await newRestaurante.save();
    res.status(200).json({ message: `Restaurante creado correctamente` });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha creado el Restaurante`,
    });
  }
};
