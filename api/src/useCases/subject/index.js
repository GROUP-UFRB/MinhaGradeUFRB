class FindByIdSubjectUseCase {
  constructor(subjectRepository) {
    this.subjectRepository = subjectRepository;
  }

  async execute(id) {
    const subject = await this.subjectRepository.findById(id);
    if (!subject) {
        throw new Error('Subject not found');
    }
    return subject;
  }
}

module.exports = FindByIdSubjectUseCase;
