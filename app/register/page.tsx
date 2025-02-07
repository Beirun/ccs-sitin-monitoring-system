import React from "react";
import { Input } from "@/components/ui/input";
import { getStudents, addStudent } from "@/api/prisma-db";
import RegisterButton from "@/components/RegisterButton";
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

  const student = await prisma.student.findMany()

  console.log("student", student);
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center text-white">
        <form className="flex flex-col gap-4 w-1/6">
        
          <input id="idno" className="input-register" type="text" placeholder="IDNo" />
          <input id="lastname" className="input-register" type="text" placeholder="Last Name" />
          <input id="firstname" className="input-register" type="text" placeholder="First Name" />
          <input id="middlename" className="input-register" type="text" placeholder="Middle Name" />
          <input id="course" className="input-register" type="text" placeholder="Course" />
          <input id="yearlevel" className="input-register" type="text" placeholder="Year Level" />
          <input id="email" className="input-register" type="text" placeholder="Email Address" />
          <input id="username" className="input-register" type="text" placeholder="Username" />
          <input id="password" className="input-register" type="password" placeholder="Password" />
          <RegisterButton/>
        </form>
        
    </div>
  );
};

export default Page;
