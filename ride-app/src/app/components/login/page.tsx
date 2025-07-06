"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import { LoginFormValues, User } from "./login.types";
import { DUMMY_USERS } from "../../constants";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const LoginPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<LoginFormValues>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username, password } = form;
    const matchedUser: User | undefined = DUMMY_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (matchedUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", matchedUser.username);
      localStorage.setItem("name", matchedUser.name);
      localStorage.setItem("role", matchedUser.role);

      router.push(
        matchedUser.role === "passenger" ? "/request-ride" : "/see-rides"
      );
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.content}>
          <div className={styles.icon}>
            <DirectionsCarIcon sx={{ fontSize: 28 }} />
          </div>
          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>Sign in to your account</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Username</label>
              <input
                className={styles.input}
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <input
                className={styles.input}
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              {error && <p className={styles.error}>{error}</p>}
            </div>

            <button className={styles.submitButton} type="submit">
              Sign In
            </button>
          </form>

          <div className={styles.forgotPassword}>
            <a href="#" className={styles.forgotPasswordLink}>
              Forgot your password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
