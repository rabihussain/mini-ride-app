"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./request-ride.module.scss";
import { RideRequest, RideType } from "./request-ride.types";
import { DUMMY_LOCATIONS, RIDE_TYPES } from "../constants";

const RequestRidePage = () => {
  const router = useRouter();
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [rideType, setRideType] = useState<RideType>("Car");
  const [passengerName, setPassengerName] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");
    if (role !== "passenger") {
      router.push("/");
    }
    if (name) setPassengerName(name);
  }, [router]);

  const handleSubmit = () => {
    if (!pickupLocation || !dropoffLocation) {
      alert("Fill all fields");
      return;
    }

    const newRide: RideRequest = {
      id: Date.now().toString(),
      pickupLocation,
      dropoffLocation,
      rideType,
      passengerName,
      status: "Requested",
    };

    const existing = JSON.parse(localStorage.getItem("rideRequests") || "[]");
    existing.push(newRide);
    localStorage.setItem("rideRequests", JSON.stringify(existing));

    router.push("/ride-history");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Hi {passengerName}, request your ride</h2>

        <select
          className={styles.select}
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        >
          <option value="">Select Pickup</option>
          {DUMMY_LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
        >
          <option value="">Select Drop-off</option>
          {DUMMY_LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={rideType}
          onChange={(e) => setRideType(e.target.value as RideType)}
        >
          {RIDE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button className={styles.button} onClick={handleSubmit}>
          Request Ride
        </button>
        <button
  className={styles.secondaryButton}
  onClick={() => router.push("/ride-history")}
>
  See Rides
</button>
      </div>
    </div>
  );
};

export default RequestRidePage;
