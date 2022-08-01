const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class PeopleRepository {
    findByEmail(email) {
        const people = await prisma.people.findFirst({
            where: { email: email },
        });
        return people;
    }

    create(data) {
        const people = await prisma.people.create({
            data: data
          });
        return people;
    }
}

module.exports = new PeopleRepository();