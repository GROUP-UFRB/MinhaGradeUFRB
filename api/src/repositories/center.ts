import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CenterRepository {
  async findByCode(cod_center: string) {
    const center = await prisma.center.findFirst({
      where: { cod_center: cod_center },
    });
    return center;
  }

  async findAll() {
    const centers = await prisma.center.findMany();
    return centers;
  }

  async create(data: any) {
    const center = await prisma.center.create({
      data: data,
    });
    return center;
  }
}

export default new CenterRepository();
