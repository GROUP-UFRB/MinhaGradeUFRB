import { Request, Response } from "express";

import LoginUseCase from "../useCases/people/login";
import RegisterUseCase from "../useCases/people/register";

import peopleRepository from "../repositories/people";

export const peopleController = {
  async login(req: Request, res: Response) {
    const loginUseCase = new LoginUseCase(peopleRepository);
    try {
      const people = await loginUseCase.execute(req.body);
      return res.json({
        id: people.people_id,
        name: people.name,
        email: people.email,
        token: people.token,
      });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async register(req: Request, res: Response) {
    const registerUseCase = new RegisterUseCase(peopleRepository);
    try {
      const people = await registerUseCase.execute(req.body);
      return res.json({
        id: people.people_id,
        name: people.name,
        email: people.email,
        token: people.token,
      });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};
