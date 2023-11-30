import mongoose from "npm:mongoose@8.0.1";
import { Booking, Client } from "../types.ts";

const Schema = mongoose.Schema;

/**
 * Para la validacion he usado como referencia:
 * https://stackoverflow.com/questions/63098294/validation-in-mongoose-schema
 * y
 * https://mongoosejs.com/docs/validation.html
 */

const clientSchema = new Schema({
  //_id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: checkEmailValidation,
      message: ` no es un correo valido`,
    },
  },
  phoneNumber: {
    type: Number,
    required: true,
    validate: {
      validator: checkPhoneNumberValidation,
      message: `no es un numero valido`,
    },
  },
  DNI: {
    type: String,
    required: true,
    validate: {
      validator: checkDniValidation,
      message: `no es un dni valido`,
    },
  },
  booking: { type: Array<Booking>, required: true },
});

/**
 * para la expresion regular use la usada en stackOverflow de aqui:
 * https://es.stackoverflow.com/questions/453176/como-validar-correctamente-un-email-con-expresiones-regulares
 */

function checkEmailValidation(email: string) {
  return /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/
    .test(email);
}

function checkPhoneNumberValidation(phoneNumber: number) {
  return /^[679]{1}[0-9]{8}$/.test(phoneNumber.toString());
}

function checkDniValidation(dni: string) {
  return /^[0-9]{8}[A-Z]{1}$/.test(dni);
}

export type ClientModelType = mongoose.Document & Omit<Client, "_id">;

export const ClientModel = mongoose.model<ClientModelType>(
  "Cliente",
  clientSchema,
);
