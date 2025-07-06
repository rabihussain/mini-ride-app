export type RideStatus = "Requested" | "Accepted" | "Rejected" | "Confirmed";

export interface RideHistoryItem {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  rideType: "Car" | "Bike" | "Rickshaw";
  passengerName: string;
  driverName?: string;
  status: RideStatus;
}
