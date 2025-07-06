# Mini Ride Booking System  
**By Rabi Hussain**

This is a role-based ride booking simulation built with Next.js. Users can log in as a **passenger** or a **driver**. Passengers can request rides, and drivers can accept or reject them. All data is handled on the frontend using dummy constants and `localStorage`.

---

## Tech Stack

- **Next.js**  
  Provides file-based routing and a fast React development environment.

- **React**  
  Used to build modular and reusable UI components.

- **TypeScript**  
  Ensures type safety for data models, form inputs, and app logic.

- **SCSS Modules**  
  Enables scoped styling per component/page while keeping styles consistent.

- **Material UI Icons**  
  Adds polished, intuitive icons (e.g., car icon on the login screen).

- **localStorage**  
  Simulates a backend by storing user sessions and ride data persistently on the client side.

---

## Features

- Role-based login system for **passenger** and **driver**
- Passenger can request a ride by selecting:
  - Pickup location
  - Drop-off location
  - Ride type (Car, Bike, Rickshaw)
- Driver can:
  - View unassigned ride requests
  - Accept or reject rides
  - See rides they’ve accepted
- Passenger can:
  - View ride history
  - See updated status and assigned driver
- Data persistence using browser `localStorage`
- Clean, consistent UI styled with SCSS Modules

---

## How to Run the App

### 1. Clone the Repository

```bash
git clone https://github.com/rabihussain/mini-ride-app.git
cd mini-ride-app
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Server 
```bash
npm run dev
```

## Folder Structure

```bash
/app
  └── login/               → Login screen and logic
  └── request-ride/        → Passenger's ride request screen
  └── see-rides/           → Driver's ride management screen
  └── ride-history/        → Passenger's ride history screen

/constants.tsx             → Dummy users, ride types, and locations

/types/
  └── login.types.ts
  └── request-ride.types.ts
  └── see-rides.types.ts   → Page-specific type definitions
```


## Dummy Users (For Testing)

| Role      | Username    | Password     |
|-----------|-------------|--------------|
| Passenger | jeenyuser   | 1234secure   |
| Driver    | driver123   | driversecure |
