-- CreateTable
CREATE TABLE "Error" (
    "error_id" SERIAL NOT NULL,
    "msg" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "people_id" INTEGER NOT NULL,

    CONSTRAINT "Error_pkey" PRIMARY KEY ("error_id")
);

-- CreateTable
CREATE TABLE "People" (
    "people_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "People_pkey" PRIMARY KEY ("people_id")
);

-- CreateTable
CREATE TABLE "Student" (
    "student_id" SERIAL NOT NULL,
    "register" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "init_semester" TEXT NOT NULL,
    "people_id" INTEGER NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("student_id")
);

-- CreateTable
CREATE TABLE "Center" (
    "center_id" SERIAL NOT NULL,
    "cod_center" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Center_pkey" PRIMARY KEY ("center_id")
);

-- CreateTable
CREATE TABLE "Course" (
    "course_id" SERIAL NOT NULL,
    "cod_course" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workload_S_required" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "workload_S_optional" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "workload_S_complement" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_center" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("course_id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "subject_id" SERIAL NOT NULL,
    "subject_code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "workload" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_center" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subject_id")
);

-- CreateTable
CREATE TABLE "ComplementActivity" (
    "complement_activity_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type_activity" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "student_id" INTEGER NOT NULL,

    CONSTRAINT "ComplementActivity_pkey" PRIMARY KEY ("complement_activity_id")
);

-- CreateTable
CREATE TABLE "CourseRequireSubject" (
    "course_require_subject_id" SERIAL NOT NULL,
    "optional" BOOLEAN NOT NULL DEFAULT false,
    "semeter" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_course" TEXT NOT NULL,
    "subject_id" INTEGER NOT NULL,

    CONSTRAINT "CourseRequireSubject_pkey" PRIMARY KEY ("course_require_subject_id")
);

-- CreateTable
CREATE TABLE "SubjectStudent" (
    "subject_student_id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "semester" VARCHAR(6) NOT NULL,
    "subject_code" TEXT NOT NULL,
    "student_id" INTEGER NOT NULL,

    CONSTRAINT "SubjectStudent_pkey" PRIMARY KEY ("subject_student_id")
);

-- CreateTable
CREATE TABLE "SubjectRequireSubject" (
    "subject_require_subject_id" SERIAL NOT NULL,
    "subject_code" TEXT NOT NULL,
    "require_s_id" INTEGER NOT NULL,

    CONSTRAINT "SubjectRequireSubject_pkey" PRIMARY KEY ("subject_require_subject_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "People_email_key" ON "People"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Center_cod_center_key" ON "Center"("cod_center");

-- CreateIndex
CREATE UNIQUE INDEX "Course_cod_course_key" ON "Course"("cod_course");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_subject_code_key" ON "Subject"("subject_code");

-- AddForeignKey
ALTER TABLE "Error" ADD CONSTRAINT "Error_people_id_fkey" FOREIGN KEY ("people_id") REFERENCES "People"("people_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_people_id_fkey" FOREIGN KEY ("people_id") REFERENCES "People"("people_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Course"("course_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_cod_center_fkey" FOREIGN KEY ("cod_center") REFERENCES "Center"("cod_center") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_cod_center_fkey" FOREIGN KEY ("cod_center") REFERENCES "Center"("cod_center") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplementActivity" ADD CONSTRAINT "ComplementActivity_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRequireSubject" ADD CONSTRAINT "CourseRequireSubject_cod_course_fkey" FOREIGN KEY ("cod_course") REFERENCES "Course"("cod_course") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRequireSubject" ADD CONSTRAINT "CourseRequireSubject_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subject"("subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectStudent" ADD CONSTRAINT "SubjectStudent_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "Subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectStudent" ADD CONSTRAINT "SubjectStudent_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "Student"("student_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRequireSubject" ADD CONSTRAINT "SubjectRequireSubject_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "Subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRequireSubject" ADD CONSTRAINT "SubjectRequireSubject_require_s_id_fkey" FOREIGN KEY ("require_s_id") REFERENCES "CourseRequireSubject"("course_require_subject_id") ON DELETE RESTRICT ON UPDATE CASCADE;
