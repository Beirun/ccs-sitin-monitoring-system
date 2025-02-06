import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// Get all students
export async function getStudents() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const students = await prisma.student.findMany();
    return students;
}   

// Add a student
export async function addStudent(
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
    const student = await prisma.student.create({
        data: {
            idno,
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