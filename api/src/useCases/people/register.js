const { PrismaClient } = require("@prisma/client");
const createToken = require("../../utils/createToken");

const prisma = new PrismaClient();

class RegisterUseCase {
  constructor(peopleRepository) {
    this.peopleRepository = peopleRepository;
  }

  async execute(data) {
    const { name, email, password } = data;
    if (!name || !email || !password) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const checkEmail = await this.peopleRepository.findByEmail(email);
    if (checkEmail) {
      throw new Error("Email already exists.");
    }
    const people = await this.peopleRepository.create({
      name,
      email,
      password,
    });
    people.token = createToken(people, "7d");
    return people;
  }
}

module.exports = RegisterUseCase;
