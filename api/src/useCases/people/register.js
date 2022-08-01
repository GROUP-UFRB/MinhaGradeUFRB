const { PrismaClient } = require("@prisma/client");
const createToken = require("../../utils/createToken");

const prisma = new PrismaClient();

class RegisterUseCase {
  async execute(data) {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const checkEmail = await prisma.people.findFirst({
      where: { email: email },
    });
    if (checkEmail) {
      throw new Error("Email already exists.");
    }
    const people = await prisma.people.create({
      data: {
        name,
        email,
        password,
      },
    });
    people.token = createToken(people, "7d");
    return people;
  }
}

module.exports = RegisterUseCase;
