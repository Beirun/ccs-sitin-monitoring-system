

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();



export const POST = async (req: NextRequest) => {
    const { idno, firstname, lastname, middlename, course, yearlevel, email, username, password } = await req.json();
  
    const studentData = {
      idno,
      firstname,
      lastname,
      middlename,
      course,
      yearlevel,
      email,
      username,
      password
    }
    const student = await prisma.student.create({
      data: studentData,
    });
  
    return NextResponse.json({
        student,
    });
  };