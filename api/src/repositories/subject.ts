import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SubjectRepository {
  async findByCode(subject_code: string) {
    const subject = await prisma.subject.findFirst({
      where: { subject_code: subject_code },
    });
    return subject;
  }

  async findAll() {
    const subjects = await prisma.subject.findMany();
    return subjects;
  }

  async findById(id: number) {
    const subject = await prisma.subject.findUnique({ where: { id } });
    return subject;
  }

  async create(data: any) {
    const subject = await prisma.subject.create({
      data: data,
    });
    return subject;
  }
}

export default new SubjectRepository();
