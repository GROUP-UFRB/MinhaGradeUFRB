const CreateStudentUseCase = require("../useCases/student/create");

const studentRepository = require("../repositories/student");
const peopleRepository = require("../repositories/people");

const studentController = {
  async create(req, res) {
    const createStudentUseCaseCase = new CreateStudentUseCase(studentRepository, peopleRepository);
    try {
      const student = await createStudentUseCaseCase.execute(req.body);
      return res.json({
        id: student.student_id,
        register: student.register,
        score: student.score,
        active: student.active,
        init_semester: student.init_semester,
        course_id: student.course_id
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = studentController;