export type Client = {
  //_id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  DNI: string;
  booking: Array<Booking>;
};

export type Restaurant = {
  //_id: string;
  name: string;
  CIF: number;
  address: string;
  booking: Array<Booking>;
};

export type Booking = {
  date: number;
  client: string;
  restaurant: string;
};
