export type RideStatus = "Requested" | "Accepted" | "Rejected" | "Confirmed";

export interface RideForDriver {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  rideType: "Car" | "Bike" | "Rickshaw";
  passengerName: string;
  driverName?: string;
  status: RideStatus;
}
