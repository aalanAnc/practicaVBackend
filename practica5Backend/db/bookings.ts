import mongoose from "npm:mongoose@8.0.1";
import { ClientModel } from "./clients.ts";
import { RestaurantModel } from "./restaurants.ts";
import { Booking } from "../types.ts";
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  date: { type: Number, default: Date.now },
  client: { type: String, required: true },
  restaurant: { type: String, required: true },
});

/**
 * Documentacion usada de:
 * https://www.mongodb.com/docs/manual/reference/operator/update/push/
 * https://mongoosejs.com/docs/middleware.html
 */
bookingSchema.pre("save", async function () {
  const bookiing = this as mongoose.Document & {
    client: string;
    restaurant: string;
  };
  try {
    await ClientModel.findByIdAndUpdate(bookiing.client, {
      $push: { bookings: bookiing.id },
    });
    await RestaurantModel.findByIdAndUpdate(bookiing.restaurant, {
      $push: { bookings: bookiing.id },
    });
  } catch (error) {
    console.error(error);
  }
});

/*  Me da error el Booking asi que lo dejo comentado para que no de error al compilar
bookingSchema.pre("findOneAndDelete", async function () {
  const booking = this as mongoose.Document & Booking;
  try {
    await ClientModel.findByIdAndUpdate(booking.client, {
      $pull: { bookings: booking._id },
    });
    await RestaurantModel.findByIdAndUpdate(booking.restaurant, {
      $pull: { bookings: booking._id },
    });
  } catch (error) {
    console.error(error);
  }
});
*/
export type BookingModelType = mongoose.Document;

export const BookingModel = mongoose.model<BookingModelType>(
  "Booking",
  bookingSchema,
);
