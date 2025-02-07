import React from "react";
import { Input } from "@/components/ui/input";
import { getStudents, addStudent } from "@/api/prisma-db";
import RegisterForm from "@/components/RegisterForm";
import prisma from "@/app/db";
type Student = {
  idno: number;
  firstname: string;
  lastname: string;
  middlename: string;
  course: string;
  yearlevel: number;
  email: string;
  username: string;
  password: string;
};

const Page = async () => {
  const students = await getStudents();
  console.log(students);
const studentData = {
  idno: 1,
  firstname: "John",
  lastname: "Doe",
  middlename: "M",
  course: "BSIT",
  yearlevel: 2,
  email: "I6BvI@example.com",
  username: "johndoe",
  password: "password",
};

// addStudent(studentData);

  const student = await prisma.student.findMany()

  console.log("student", student);
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center text-white">
          <RegisterForm/>
        
    </div>
  );
};

export default Page;
