export type UserRole = "passenger" | "driver";

export interface User {
  name: string;
  username: string;
  password: string;
  role: UserRole;
}

export interface LoginFormValues {
  username: string;
  password: string;
}
