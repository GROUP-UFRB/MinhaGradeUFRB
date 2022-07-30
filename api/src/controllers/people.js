const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const peopleController = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json({
          message: "There is an empty field, please check and try again.",
        });
      }
      const people = await prisma.people.findFirst({
        where: { email: email },
      });
      if (people) {
        if (people.password === password) {
          return res.json({ message: "Login success." });
        } else {
          return res.json({ message: "Incorrect data, try again." });
        }
      } else {
        return res.json({ message: "Incorrect data, try again." });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res.json({
          message: "There is an empty field, please check and try again.",
        });
      }
      const checkEmail = await prisma.people.findFirst({
        where: { email: email },
      });
      if (checkEmail) {
        return res.json({ message: "Email already exists." });
      }
      const people = await prisma.people.create({
        data: {
          name,
          email,
          password,
        },
      });
      return res.status(201).json(people);
    } catch (error) {
        return res.status(500).json(error);
    }
  },
};

module.exports = peopleController;
