class CreateStudentUseCase {
  constructor(private studentRepository: any, private peopleRepository: any) {}

  async execute(data: any) {
    const { register, score, active, init_semester, course_id, people_id } =
      data;
    if (!register || !score || !active || !init_semester || !course_id) {
      throw new Error("There is an empty field, please check and try again.");
    }
    const checkRegister = await this.studentRepository.findByRegister(register);
    if (checkRegister) {
      throw new Error("Register already exists.");
    }
    const checkPeople = await this.peopleRepository.findById(people_id);
    if (!checkPeople) {
      throw new Error("User not found.");
    }
    const student = await this.studentRepository.create({
      register,
      score,
      active,
      init_semester,
      course_id,
      people_id,
    });
    return student;
  }
}

export default CreateStudentUseCase;
