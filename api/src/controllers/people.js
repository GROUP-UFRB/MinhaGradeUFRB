const LoginUseCase = require("../useCases/people/login");
const RegisterUseCase = require("../useCases/people/register");

const peopleRepository = require("../repositories/people");

const peopleController = {
  async login(req, res) {
    const loginUseCase = new LoginUseCase(peopleRepository);
    try {
      const people = await loginUseCase.execute(req.body);
      return res.json({
        id: people.people_id,
        name: people.name,
        email: people.email,
        token: people.token,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async register(req, res) {
    const registerUseCase = new RegisterUseCase(peopleRepository);
    try {
      const people = await registerUseCase.execute(req.body);
      return res.json({
        id: people.people_id,
        name: people.name,
        email: people.email,
        token: people.token,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = peopleController;
