"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./see-rides.module.scss";
import { RideForDriver } from "./see-rides.types";

const SeeRidesPage = () => {
  const router = useRouter();
  const [rides, setRides] = useState<RideForDriver[]>([]);
  const [driverName, setDriverName] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");

    if (role !== "driver") {
      router.push("/");
      return;
    }

    const storedRides = JSON.parse(localStorage.getItem("rideRequests") || "[]");
    setRides(storedRides);
    if (name) setDriverName(name);
  }, [router]);

  const handleDecision = (rideId: string, decision: "Accepted" | "Rejected") => {
    const updatedRides: RideForDriver[] = rides.map((ride) => {
      if (ride.id === rideId) {
        if (decision === "Rejected") return { ...ride, status: "Rejected" };
        return { ...ride, status: "Accepted", driverName };
      }
      return ride;
    });

    localStorage.setItem("rideRequests", JSON.stringify(updatedRides));
    setRides(updatedRides);
  };

  const visibleRides = rides.filter(
    (r) => r.status === "Requested" || (r.status === "Accepted" && r.driverName === driverName)
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Hi {driverName}, see available rides</h2>

      {visibleRides.length === 0 ? (
        <p>No available rides.</p>
      ) : (
        <ul className={styles.rideList}>
          {visibleRides.map((ride) => (
            <li key={ride.id} className={styles.rideCard}>
              <p>
                <strong>{ride.passengerName}</strong> requested a{" "}
                <strong>{ride.rideType}</strong>
              </p>
              <p>
                From <b>{ride.pickupLocation}</b> to <b>{ride.dropoffLocation}</b>
              </p>

              {ride.status === "Accepted" && ride.driverName === driverName ? (
                <div className={styles.details}>
                  <p>Status: <strong>Accepted</strong></p>
                  <p>You are assigned as driver</p>
                </div>
              ) : (
                <div className={styles.actions}>
                  <button
                    className={styles.acceptButton}
                    onClick={() => handleDecision(ride.id, "Accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className={styles.rejectButton}
                    onClick={() => handleDecision(ride.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SeeRidesPage;
