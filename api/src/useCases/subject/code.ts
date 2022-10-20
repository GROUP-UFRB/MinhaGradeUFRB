class FindByCodeSubjectUseCase {
  constructor(private subjectRepository: any) {
    this.subjectRepository = subjectRepository;
  }

  async execute(subject_code: string) {
    const subject = await this.subjectRepository.findByCode(subject_code);
    if (!subject) {
      throw new Error("Subject not found");
    }
    return subject;
  }
}

export default FindByCodeSubjectUseCase;
