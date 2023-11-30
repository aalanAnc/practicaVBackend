import mongoose from "npm:mongoose@8.0.1";
import { Booking, Restaurant } from "../types.ts";

const Schema = mongoose.Schema;

const restSchema = new Schema({
  //_id: { type: String, required: true },
  name: { type: String, required: true },
  CIF: {
    type: Number,
    required: true,
    validate: {
      validator: checkCIFvalidation,
      message: `no es un cif valido`,
    },
  },
  address: { type: String, required: true },
  booking: { type: Array<Booking>, required: true },
});

function checkCIFvalidation(cif: number) {
  return /^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/.test(cif.toString());
}

export type RestaurantModelType = mongoose.Document & Omit<Restaurant, "_id">;

export const RestaurantModel = mongoose.model<RestaurantModelType>(
  "Restaurant",
  restSchema,
);
