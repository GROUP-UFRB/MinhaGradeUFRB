const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class PeopleRepository {

    async findByEmail(email) {
        const people = await prisma.people.findFirst({
            where: { email: email },
        });
        return people;
    }

    async findById(people_id) {
        const people = await prisma.people.findFirst({
            where: { people_id: people_id },
        });
        return people;
    }

    async create(data) {
        const people = await prisma.people.create({
            data: data
          });
        return people;
    }
}

module.exports = new PeopleRepository();