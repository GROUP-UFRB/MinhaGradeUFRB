const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class StudentRepository {
  async findByRegister(register) {
    const student = await prisma.student.findFirst({
      where: { register: register },
    });
    return student;
  }

  async findAll() {
    const students = await prisma.student.findMany();
    return students;
  }

  async findById(student_id) {
    const student = await prisma.student.findUnique({where: {student_id}})
    return student;
  }

  async create(data) {
    const student = await prisma.student.create({
      data: data,
    });
    return student;
  }
}

module.exports = new StudentRepository();
