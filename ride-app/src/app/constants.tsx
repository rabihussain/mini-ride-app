export const DUMMY_USERS = [
    {
      name: "Jeeny",
      username: "jeenyuser",
      password: "1234secure",
      role: "passenger" as const,
    },
    {
      name: "Adeel",
      username: "driver123",
      password: "driversecure",
      role: "driver" as const,
    },
    {
      name: "Jeeny2",
      username: "jeenyuser2",
      password: "1234secure",
      role: "passenger" as const,
    },
    {
      name: "Osman",
      username: "driver1234",
      password: "driversecure",
      role: "driver" as const,
    },
  ];
  
  export const DUMMY_LOCATIONS = [
    "Mall Road",
    "Airport",
    "Liberty Market",
    "Gulberg",
    "Model Town",
  ];
  
  export const RIDE_TYPES = ["Car", "Bike", "Rickshaw"] as const;
  