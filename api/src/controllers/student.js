const formodable = require("formodable"); //for file upload

const CreateStudentUseCase = require("../useCases/student/create");
const FindAllStudentUseCase = require("../useCases/student/all");
const FindByIdStudentUseCase = require("../useCases/student/index");

const studentRepository = require("../repositories/student");
const peopleRepository = require("../repositories/people");

const studentController = {
  async create(req, res) {
    const createStudentUseCaseCase = new CreateStudentUseCase(
      studentRepository,
      peopleRepository
    );
    try {
      const student = await createStudentUseCaseCase.execute(req.body);
      return res.json({
        id: student.student_id,
        register: student.register,
        score: student.score,
        active: student.active,
        init_semester: student.init_semester,
        course_id: student.course_id,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async all(req, res) {
    const findAllStudentUseCaseCase = new FindAllStudentUseCase(
      studentRepository
    );
    try {
      const students = await findAllStudentUseCaseCase.execute();
      return res.json(students);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async index(req, res) {
    const findByIdStudentUseCaseCase = new FindByIdStudentUseCase(
      studentRepository
    );
    try {
      const { id } = req.params;
      const student = await findByIdStudentUseCaseCase.execute(parseInt(id));
      return res.json(student);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async createByHistory(req, res){
    /*This function hundles the request for uploading a PDF
     file with history information about the user. The user
     must be logged into an acount to do that.

    TODO: The 

     The algorithm:
     1. receive the file
     2. call pdf crawler hundler for information extraction
     3. call the database hundler to save
    */
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var filePath = files.filetoupload.filepath; //the file uploaded location

      var extention = file.fileupload.originalFilename.slice(-3,);
      if (extention != "PDF" || extention != "pdf"){
        //remove the file and say to user that the system can't receive files different of PDF

        return res.status(415).json({ message: "The file is not supported." });
      }
    })
  }
};

module.exports = studentController;
