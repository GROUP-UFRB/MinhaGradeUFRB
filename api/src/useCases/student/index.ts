class FindByIdStudentUseCase {
  constructor(private studentRepository: any) {
    this.studentRepository = studentRepository;
  }

  async execute(id: string) {
    const student = await this.studentRepository.findById(id);
    if (!student) {
      throw new Error("Student not found");
    }
    return student;
  }
}

export default FindByIdStudentUseCase;
