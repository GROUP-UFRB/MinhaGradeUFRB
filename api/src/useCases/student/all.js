const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class FindlAllStudentUseCase {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async execute() {
    const students = await this.studentRepository.findAll();
    if (students == []) {
        throw new Error('Students not found');
    }
    return students;
  }
}

module.exports = FindlAllStudentUseCase;
