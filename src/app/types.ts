export interface Flight {
  flight_id: string;
  flight_name: string;
  boarding_date: string;
  boarding_time: string;
  origin: string;
  destination: string;
  arrival_date: string;
  arrival_time: string;
  status: Status;
  image_url: string;
  link: string;
  airportName: string;
  airportWebsite: string;
  numberOfPassengers: number;
}

export interface Destination {
  destination_id: string;
  destination_name: string;
  status: Status;
  airport_name: string;
  airport_url: string;
  image_url: string;
}

export interface Passenger {
  full_name: string;
  passport_number: string;
}
export interface Booking {
  booking_id: string;
  flight: Flight;
  passengers: Passenger[];
}

export enum Status {
  Active,
  InActive,
}
