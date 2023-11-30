// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { BookingModel } from "../db/bookings.ts";

export const borrarReservaID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const borrarReserva = await BookingModel.findByIdAndDelete(id);
    if (!borrarReserva) {
      res.status(400).json({
        message:
          "No se ha encontrado el id por lo que no se ha borrado la reserva",
      });
    }
    res.status(200).json({ message: "Reserva borrada" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha podido eliminar la reserva`,
    });
  }
};
