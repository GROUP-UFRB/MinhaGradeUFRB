class FindAllSubjectUseCase {
  constructor(subjectRepository) {
    this.subjectRepository = subjectRepository;
  }

  async execute() {
    const subjects = await this.subjectRepository.findAll();
    if (subjects == []) {
        throw new Error('Subjects not found');
    }
    return subjects;
  }
}

module.exports = FindAllSubjectUseCase;
