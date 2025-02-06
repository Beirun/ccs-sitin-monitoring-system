import React from "react";
import { Input } from "@/components/ui/input";
import { getStudents, addStudent } from "@/api/prisma-db";
import RegisterButton from "@/components/RegisterButton";
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
  return (
    <div className="flex flex-col bg-gray-900 w-screen h-screen justify-center items-center text-white">
        <form className="flex flex-col gap-4 w-1/6">
          <Input id="idno" className="border-none focus-visible:ring-0" type="text" placeholder="IDNo" />
          <Input id="lastname" className="border-none focus-visible:ring-0" type="text" placeholder="Last Name" />
          <Input id="firstname" className="border-none focus-visible:ring-0" type="text" placeholder="First Name" />
          <Input id="middlename" className="border-none focus-visible:ring-0" type="text" placeholder="Middle Name" />
          <Input id="course" className="border-none focus-visible:ring-0" type="text" placeholder="Course" />
          <Input id="yearlevel" className="border-none focus-visible:ring-0" type="text" placeholder="Year Level" />
          <Input id="email" className="border-none focus-visible:ring-0" type="text" placeholder="Email Address" />
          <Input id="username" className="border-none focus-visible:ring-0" type="text" placeholder="Username" />
          <Input id="password" className="border-none focus-visible:ring-0" type="password" placeholder="Password" />
          <RegisterButton/>
        </form>
        <ul className="space-y-4 p-4">
          {students.map((student: Student) => (
            <li className="p-4 bg-white" key={student.idno}>
              {student.idno} - {student.firstname} {student.lastname}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Page;
