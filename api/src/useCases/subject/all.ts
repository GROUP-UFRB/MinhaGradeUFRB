class FindAllSubjectUseCase {
  constructor(private subjectRepository: any) {
    this.subjectRepository = subjectRepository;
  }

  async execute() {
    const subjects = await this.subjectRepository.findAll();
    if (subjects.length === 0) {
      throw new Error("Subjects not found");
    }
    return subjects;
  }
}

export default FindAllSubjectUseCase;
