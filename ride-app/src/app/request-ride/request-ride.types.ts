export type RideType = "Car" | "Bike" | "Rickshaw";

export interface RideRequest {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  rideType: RideType;
  passengerName: string;
  status: "Requested";
}
