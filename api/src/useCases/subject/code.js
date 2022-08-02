class FindByCodeSubjectUseCase {
  constructor(subjectRepository) {
    this.subjectRepository = subjectRepository;
  }

  async execute(subject_code) {
    const subject = await this.subjectRepository.findByCode(subject_code);
    if (!subject) {
        throw new Error('Subject not found');
    }
    return subject;
  }
}

module.exports = FindByCodeSubjectUseCase;
