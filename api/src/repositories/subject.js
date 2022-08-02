const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class SubjectRepository {
  async findByCode(subject_code) {
    const subject = await prisma.subject.findFirst({
      where: { subject_code: subject_code },
    });
    return subject;
  }

  async findAll() {
    const subjects = await prisma.subject.findMany();
    return subjects;
  }

  async findById(subject_id) {
    const subject = await prisma.subject.findUnique({where: {subject_id}})
    return subject;
  }

  async create(data) {
    const subject = await prisma.subject.create({
      data: data,
    });
    return subject;
  }
}

module.exports = new SubjectRepository();
