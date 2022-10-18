import CreateStudentUseCase from "../useCases/student/create";
import FindAllStudentUseCase from "../useCases/student/all";
import FindByIdStudentUseCase from "../useCases/student";

import studentRepository from "../repositories/student";
import peopleRepository from "../repositories/people";
import { Request, Response } from "express";

export const studentController = {
  async create(req: Request, res: Response) {
    const createStudentUseCaseCase = new CreateStudentUseCase(
      studentRepository,
      peopleRepository
    );
    try {
      const student = await createStudentUseCaseCase.execute(req.body);
      return res.json({
        id: student.student_id,
        register: student.register,
        score: student.score,
        active: student.active,
        init_semester: student.init_semester,
        course_id: student.course_id,
      });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async all(req: Request, res: Response) {
    const findAllStudentUseCaseCase = new FindAllStudentUseCase(
      studentRepository
    );
    try {
      const students = await findAllStudentUseCaseCase.execute();
      return res.json(students);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },

  async index(req: Request, res: Response) {
    const findByIdStudentUseCaseCase = new FindByIdStudentUseCase(
      studentRepository
    );
    try {
      const { id } = req.params;
      const student = await findByIdStudentUseCaseCase.execute(id);
      return res.json(student);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  },
};
