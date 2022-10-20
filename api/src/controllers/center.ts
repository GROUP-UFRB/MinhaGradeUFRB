import CreateCenterUseCase from "../useCases/center/create";
import FindAllCenterUseCase from "../useCases/center/all";
import FindByCodeCenterUseCase from "../useCases/center/code";

import centerRepository from "../repositories/center";
import { Request, Response } from "express";

export const centerController = {
  async create(req: Request, res: Response) {
    const createCenterUseCaseCase = new CreateCenterUseCase(centerRepository);
    try {
      const center = await createCenterUseCaseCase.execute(req.body);
      return res.json(center);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async all(req: Request, res: Response) {
    const findAllCenterUseCaseCase = new FindAllCenterUseCase(centerRepository);
    try {
      const centers = await findAllCenterUseCaseCase.execute();
      return res.json(centers);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async code(req: Request, res: Response) {
    const findByCodeCenterUseCaseCase = new FindByCodeCenterUseCase(
      centerRepository
    );
    try {
      const { cod_center } = req.params;
      const center = await findByCodeCenterUseCaseCase.execute(cod_center);
      return res.json(center);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};
