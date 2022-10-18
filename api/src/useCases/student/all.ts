class FindAllStudentUseCase {
  constructor(private studentRepository: any) {}

  async execute() {
    const students = await this.studentRepository.findAll();
    if (students.length === 0) {
      throw new Error("Students not found");
    }
    return students;
  }
}

export default FindAllStudentUseCase;
