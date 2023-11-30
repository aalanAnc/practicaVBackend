// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { BookingModel } from "../db/bookings.ts";

export const buscarReservaID = async (res: Response, req: Request) => {
  try {
    const { id } = req.params;
    const reservaID = await BookingModel.findById(id);
    if (!reservaID) {
      return res.status(400).json({
        message: `No se ha encontrado la reserva por ese id`,
      });
    }
    res.status(200).json({ reservaID });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha podido encontrar la reserva`,
    });
  }
};
