'use client';
import React from 'react'
import { getStudents, addStudent } from "@/api/prisma-db";


const RegisterButton = () => {

  const handleRegister = async () => {
    const idno = document.getElementById('idno') as HTMLInputElement;
    const firstname = document.getElementById('firstname') as HTMLInputElement;
    const lastname = document.getElementById('lastname') as HTMLInputElement;
    const middlename = document.getElementById('middlename') as HTMLInputElement;
    const course = document.getElementById('course') as HTMLInputElement;
    const yearlevel = document.getElementById('yearlevel') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;

    await addStudent(Number(idno.value), firstname.value, lastname.value, middlename.value, course.value, Number(yearlevel.value), email.value, username.value, password.value);
    console.log("Successfully added student");
  }
  return (
    <button onClick={handleRegister} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

  )
}

export default RegisterButton