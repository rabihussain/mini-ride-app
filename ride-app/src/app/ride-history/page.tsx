"use client";

import React, { useEffect, useState } from "react";
import styles from "./ride-history.module.scss";
import { RideHistoryItem } from "./ride-history.types";
import { useRouter } from "next/navigation";

const RideHistory = () => {
  const router = useRouter();
  const [rides, setRides] = useState<RideHistoryItem[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");
    const passengerName = localStorage.getItem("name");

    if (!isLoggedIn || role !== "passenger") {
      router.push("/");
      return;
    }

    const allRides: RideHistoryItem[] = JSON.parse(localStorage.getItem("rideRequests") || "[]");
    const myRides = allRides.filter((r) => r.passengerName === passengerName);

    setName(passengerName || "");
    setRides(myRides);
  }, [router]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Ride History, {name}</h2>

      {rides.length === 0 ? (
        <p className={styles.empty}>You haven't requested any rides yet.</p>
      ) : (
        <ul className={styles.rideList}>
          {rides.map((ride) => (
            <li key={ride.id} className={styles.rideItem}>
              <div className={styles.row}>
                <strong>From:</strong> <span>{ride.pickupLocation}</span>
              </div>
              <div className={styles.row}>
                <strong>To:</strong> <span>{ride.dropoffLocation}</span>
              </div>
              <div className={styles.row}>
                <strong>Ride:</strong> <span>{ride.rideType}</span>
              </div>
              <div className={styles.row}>
                <strong>Driver:</strong> <span>{ride.driverName ?? "Not assigned"}</span>
              </div>
              <div className={`${styles.status} ${styles[ride.status.toLowerCase()]}`}>
                Status: {ride.status}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RideHistory;
