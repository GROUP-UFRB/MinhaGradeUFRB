class CreateSubjectUseCase {
  constructor(subjectRepository, centerRepository) {
    this.subjectRepository = subjectRepository;
    this.centerRepository = centerRepository;
  }

  async execute(data) {
    const { subject_code, name, workload, cod_center } = data;
    if (!subject_code || !name || !workload || !cod_center) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const checkCode = await this.subjectRepository.findByCode(subject_code);
    if (checkCode) {
      throw new Error("SubjectCode already exists.");
    }
    const checkCenter = await this.centerRepository.findByCode(cod_center);
    if (!checkCenter) {
        throw new Error("Center not found.");
    }
    const subject = await this.subjectRepository.create({
      subject_code,
      name,
      workload,
      cod_center
    });
    return subject;
  }
}

module.exports = CreateSubjectUseCase;
