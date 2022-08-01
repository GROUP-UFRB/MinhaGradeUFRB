const createToken = require("../../utils/createToken");

class LoginUseCase {
  constructor(peopleRepository) {
    this.peopleRepository = peopleRepository;
  }

  async execute(data) {
    const { email, password } = data;
    if (!email || !password) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const people = await this.peopleRepository.findByEmail(email);
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
