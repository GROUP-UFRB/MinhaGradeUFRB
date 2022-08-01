const { PrismaClient } = require("@prisma/client");
const createToken = require("../../utils/createToken");

const prisma = new PrismaClient();

class LoginUseCase {
  async execute(data) {
    const { email, password } = data;
    if (!email || !password) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const people = await prisma.people.findFirst({
      where: { email: email },
    });
    if (people) {
      if (people.password === password) {
        people.token = createToken(people, "7d");
        return people;
      } else {
        throw new Error("Incorrect data, try again.");
      }
    } else {
      throw new Error("Incorrect data, try again.");
    }
  }
}

module.exports = LoginUseCase;
