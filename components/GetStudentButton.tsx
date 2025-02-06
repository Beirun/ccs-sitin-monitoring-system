'use client';
import React from 'react'
import { getStudent } from "@/api/prisma-db";

const GetStudentButton = () => {
  return (
    <button onClick={async () => {
      const student = await getStudent(10002);
      alert(JSON.stringify(student));
    }}>Get Student</button>
  )
}

export default GetStudentButton