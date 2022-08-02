const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class FindByIdStudentUseCase {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async execute(id) {
    const student = await this.studentRepository.findById(id);
    if (!student) {
        throw new Error('Student not found');
    }
    return student;
  }
}

module.exports = FindByIdStudentUseCase;
