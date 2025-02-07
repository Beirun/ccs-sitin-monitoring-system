"use client";
import React, { useState } from "react";

const RegisterForm = () => {
  const [idno, setIdno] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [course, setCourse] = useState("");
  const [yearlevel, setYearlevel] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idno: parseInt(idno),
          firstname,
          lastname,
          middlename,
          course,
          yearlevel: parseInt(yearlevel),
          email,
          username,
          password,
        }),
      });

      if (response.ok) {
        console.log("Successfully added student");
      } else {
        console.error("Error adding student:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-1/6 p-4 bg-gray-700 rounded-lg">
      <input
        id="idno"
        className="input-register"
        type="text"
        placeholder="IDNo"
        value={idno}
        onChange={(e) => setIdno(e.target.value)}
      />
      <input
        id="lastname"
        className="input-register"
        type="text"
        placeholder="Last Name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <input
        id="firstname"
        className="input-register"
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        id="middlename"
        className="input-register"
        type="text"
        placeholder="Middle Name"
        value={middlename}
        onChange={(e) => setMiddlename(e.target.value)}
      />
      <input
        id="course"
        className="input-register"
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <input
        id="yearlevel"
        className="input-register"
        type="text"
        placeholder="Year Level"
        value={yearlevel}
        onChange={(e) => setYearlevel(e.target.value)}
      />
      <input
        id="email"
        className="input-register"
        type="text"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
        onClick={handleRegister}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default RegisterForm;