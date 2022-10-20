import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class StudentRepository {
  async findByRegister(register: string) {
    const student = await prisma.student.findFirst({
      where: { register: register },
    });
    return student;
  }

  async findAll() {
    const students = await prisma.student.findMany();
    return students;
  }

  async findById(id: number) {
    const student = await prisma.student.findUnique({ where: { id } });
    return student;
  }

  async create(data: any) {
    const student = await prisma.student.create({
      data: data,
    });
    return student;
  }
}

export default new StudentRepository();
