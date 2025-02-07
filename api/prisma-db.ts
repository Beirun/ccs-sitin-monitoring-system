import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Get all students
export async function getStudents() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const students = await prisma.student.findMany();
    return students;
}   

// Add a student
export async function addStudent(student: {
  idno: number;
  firstname: string;
  lastname: string;
  middlename: string;
  course: string;
  yearlevel: number;
  email: string;
  username: string;
  password: string;
}) {
  console.log('Received student data: ', student);

  const studentData = {
    idno: student.idno,
    firstname: student.firstname,
    lastname: student.lastname,
    middlename: student.middlename,
    course: student.course,
    yearlevel: student.yearlevel,
    email: student.email,
    username: student.username,
    password: student.password,
  };

  console.log('Created student data:', studentData);

  try {
    const newStudent = await prisma.student.create({
      data: studentData,
    });
    if (Array.isArray(newStudent) && newStudent.length === 0) {
      console.log('No student created');
      return null;
    } else {
      console.log('Created new student:', newStudent);
      return newStudent;
    }
  } catch (error) {
    console.error('Error creating new student:', error);
    throw error;
  }
}

// Get student
export async function getStudent(idno: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const student = await prisma.student.findUnique({
        where: {
            idno: idno,
        },
    });
    return student;
}

// Update student
export async function updateStudent(
    idno: number,
    firstname: string,
    lastname: string,
    middlename: string,
    course: string,
    yearlevel: number,
    email: string,
    username: string,
    password: string
) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const student = await prisma.student.update({
        where: {
            idno: idno,
        },
        data: {
            firstname,
            lastname,
            middlename,
            course,
            yearlevel,
            email,
            username,
            password,
        },
    });
    return student;    
}