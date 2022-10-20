import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PeopleRepository {
  async findByEmail(email: string) {
    const people = await prisma.people.findFirst({
      where: { email: email },
    });
    return people;
  }

  async findById(id: number) {
    const people = await prisma.people.findFirst({
      where: { id: id },
    });
    return people;
  }

  async create(data: any) {
    const people = await prisma.people.create({
      data: data,
    });
    return people;
  }
}

export default new PeopleRepository();
