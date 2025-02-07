"use client";
import React, { useState } from "react";
import { toast } from "sonner";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
      if (response.ok) {
        toast.success("Successfully logged in");
      } else {
        toast.error("Invalid username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-white">
      <input
        id="username"
        className="input-register"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        id="password"
        className="input-register"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default LoginForm;
