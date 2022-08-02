class FindAllStudentUseCase {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async execute() {
    const students = await this.studentRepository.findAll();
    if (students == []) {
        throw new Error('Students not found');
    }
    return students;
  }
}

module.exports = FindAllStudentUseCase;
