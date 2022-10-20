import CreateSubjectUseCase from "../useCases/subject/create";
import FindAllSubjectUseCase from "../useCases/subject/all";
import FindByIdSubjectUseCase from "../useCases/subject/index";
import FindByCodeSubjectUseCase from "../useCases/subject/code";

import subjectRepository from "../repositories/subject";
import centerRepository from "../repositories/center";
import { Request, Response } from "express";

export const subjectController = {
  async create(req: Request, res: Response) {
    const createSubjectUseCaseCase = new CreateSubjectUseCase(
      subjectRepository,
      centerRepository
    );
    try {
      const subject = await createSubjectUseCaseCase.execute(req.body);
      return res.json({
        id: subject.subject_id,
        subject_code: subject.subject_code,
        name: subject.name,
        workload: subject.workload,
        cod_center: subject.cod_center,
      });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async all(req: Request, res: Response) {
    const findAllSubjectUseCaseCase = new FindAllSubjectUseCase(
      subjectRepository
    );
    try {
      const subjects = await findAllSubjectUseCaseCase.execute();
      return res.json(subjects);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async index(req: Request, res: Response) {
    const findByIdSubjectUseCaseCase = new FindByIdSubjectUseCase(
      subjectRepository
    );
    try {
      const { id } = req.params;
      const subject = await findByIdSubjectUseCaseCase.execute(parseInt(id));
      return res.json(subject);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async code(req: Request, res: Response) {
    const findByCodeSubjectUseCaseCase = new FindByCodeSubjectUseCase(
      subjectRepository
    );
    try {
      const { subject_code } = req.params;
      const subject = await findByCodeSubjectUseCaseCase.execute(subject_code);
      return res.json(subject);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};
