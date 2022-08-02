const CreateSubjectUseCase = require("../useCases/subject/create");
const FindAllSubjectUseCase = require("../useCases/subject/all");
const FindByIdSubjectUseCase = require("../useCases/subject/index");
const FindByCodeSubjectUseCase = require("../useCases/subject/code");

const subjectRepository = require("../repositories/subject");

const subjectController = {
  async create(req, res) {
    const createSubjectUseCaseCase = new CreateSubjectUseCase(
      subjectRepository
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
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async all(req, res) {
    const findAllSubjectUseCaseCase = new FindAllSubjectUseCase(
      subjectRepository
    );
    try {
      const subjects = await findAllSubjectUseCaseCase.execute();
      return res.json(subjects);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async index(req, res) {
    const findByIdSubjectUseCaseCase = new FindByIdSubjectUseCase(
      subjectRepository
    );
    try {
      const { id } = req.params;
      const subject = await findByIdSubjectUseCaseCase.execute(parseInt(id));
      return res.json(subject);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async code(req, res) {
    const findByCodeSubjectUseCaseCase = new FindByCodeSubjectUseCase(
      subjectRepository
    );
    try {
      const { subject_code } = req.params;
      const subject = await findByCodeSubjectUseCaseCase.execute(subject_code);
      return res.json(subject);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = subjectController;
