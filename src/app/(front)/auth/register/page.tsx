"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      const resJSON = await res.json();
      console.log(resJSON);

      if (resJSON.success) {
        router.push("/auth/login");
        return;
      }

      if (!resJSON.success) {
        // por ejemplo si tu API responde con un error
        const errorData = await res.json();
        alert("Error: " + (errorData.message || "Unknown error"));
        return;
      }

      // alert(resJSON.message || "User registered successfully");
    } catch (error) {
      alert("Failed to register user. Try again later.");
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            {...register("username", { required: true })}
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            id="confirmPassword"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
