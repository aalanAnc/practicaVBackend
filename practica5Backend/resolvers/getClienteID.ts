// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { ClientModel } from "../db/clients.ts";

export const buscarClienteID = async (res: Response, req: Request) => {
  try {
    const { id } = req.params;
    const clienteID = await ClientModel.findById(id);
    if (!clienteID) {
      return res.status(400).json({
        message: `No se ha encontrado la reserva por ese id`,
      });
    }
    res.status(200).json({ clienteID });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha podido encontrar la reserva`,
    });
  }
};
