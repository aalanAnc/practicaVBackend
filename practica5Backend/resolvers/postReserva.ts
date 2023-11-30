// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { BookingModel } from "../db/bookings.ts";

export const crearReserva = async (req: Request, res: Response) => {
  try {
    const { date, client, restaurant } = req.body;
    const newBooking = new BookingModel({
      date,
      client,
      restaurant,
    });
    await newBooking.save();
    res.status(200).json({ message: `Reserva creada exitosamente` });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha creado la reserva`,
    });
  }
};
