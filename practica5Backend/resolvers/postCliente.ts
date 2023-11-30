// @ts-expect-error
import { Request, Response } from "npm:express@4.18.2";
import { ClientModel } from "../db/clients.ts";

export const crearCliente = async (req: Request, res: Response) => {
  try {
    const { _id, firstName, lastName, email, phoneNumber, DNI } = req.body;
    //creacion de nuevo cliente
    const newClient = new ClientModel({
      _id,
      firstName,
      lastName,
      email,
      phoneNumber,
      DNI,
    });
    await newClient.save(); // se guarda el cliente
    res.status(200).json({ message: `Cliente creado correctamente` });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: `No se ha agregado el cliente creado`,
    });
  }
};
