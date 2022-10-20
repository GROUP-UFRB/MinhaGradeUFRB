class FindByIdSubjectUseCase {
  constructor(private subjectRepository: any) {}

  async execute(id: number) {
    const subject = await this.subjectRepository.findById(id);
    if (!subject) {
      throw new Error("Subject not found");
    }
    return subject;
  }
}

export default FindByIdSubjectUseCase;
