-- CreateTable
CREATE TABLE "Error" (
    "id" SERIAL NOT NULL,
    "msg" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,

    CONSTRAINT "Error_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "People" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "People_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "register" VARCHAR(12) NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "init_semester" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cod_course" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("register")
);

-- CreateTable
CREATE TABLE "Center" (
    "id" SERIAL NOT NULL,
    "cod_center" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Center_pkey" PRIMARY KEY ("cod_center")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" SERIAL NOT NULL,
    "cod_course" VARCHAR(10) NOT NULL,
    "name" TEXT NOT NULL,
    "workload_S_required" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "workload_S_optional" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "workload_S_complement" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_center" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("cod_course")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "subject_code" VARCHAR(10) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "workload" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_center" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("subject_code")
);

-- CreateTable
CREATE TABLE "ComplementActivity" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type_activity" TEXT NOT NULL,
    "register" TEXT NOT NULL,

    CONSTRAINT "ComplementActivity_pkey" PRIMARY KEY ("title","register")
);

-- CreateTable
CREATE TABLE "TypeComplementActivity" (
    "id" SERIAL NOT NULL,
    "type_activity" VARCHAR(100) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "TypeComplementActivity_pkey" PRIMARY KEY ("type_activity")
);

-- CreateTable
CREATE TABLE "CourseRequireSubject" (
    "id" SERIAL NOT NULL,
    "optional" BOOLEAN NOT NULL DEFAULT false,
    "semester" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cod_course" TEXT NOT NULL,
    "subject_code" TEXT NOT NULL,

    CONSTRAINT "CourseRequireSubject_pkey" PRIMARY KEY ("cod_course","subject_code")
);

-- CreateTable
CREATE TABLE "SubjectStudent" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "semester" VARCHAR(6) NOT NULL,
    "subject_code" TEXT NOT NULL,
    "register" TEXT NOT NULL,

    CONSTRAINT "SubjectStudent_pkey" PRIMARY KEY ("subject_code","register")
);

-- CreateTable
CREATE TABLE "SubjectRequireSubject" (
    "id" SERIAL NOT NULL,
    "cod_course" TEXT NOT NULL,
    "subject_code" TEXT NOT NULL,
    "require_s_code" TEXT NOT NULL,

    CONSTRAINT "SubjectRequireSubject_pkey" PRIMARY KEY ("subject_code","require_s_code","cod_course")
);

-- CreateIndex
CREATE UNIQUE INDEX "People_id_key" ON "People"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Center_id_key" ON "Center"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_id_key" ON "Course"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_id_key" ON "Subject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ComplementActivity_id_key" ON "ComplementActivity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TypeComplementActivity_id_key" ON "TypeComplementActivity"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CourseRequireSubject_id_key" ON "CourseRequireSubject"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CourseRequireSubject_subject_code_key" ON "CourseRequireSubject"("subject_code");

-- CreateIndex
CREATE UNIQUE INDEX "SubjectStudent_id_key" ON "SubjectStudent"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SubjectRequireSubject_id_key" ON "SubjectRequireSubject"("id");

-- AddForeignKey
ALTER TABLE "Error" ADD CONSTRAINT "Error_email_fkey" FOREIGN KEY ("email") REFERENCES "People"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_email_fkey" FOREIGN KEY ("email") REFERENCES "People"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_cod_course_fkey" FOREIGN KEY ("cod_course") REFERENCES "Course"("cod_course") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_cod_center_fkey" FOREIGN KEY ("cod_center") REFERENCES "Center"("cod_center") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_cod_center_fkey" FOREIGN KEY ("cod_center") REFERENCES "Center"("cod_center") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplementActivity" ADD CONSTRAINT "ComplementActivity_register_fkey" FOREIGN KEY ("register") REFERENCES "Student"("register") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComplementActivity" ADD CONSTRAINT "ComplementActivity_type_activity_fkey" FOREIGN KEY ("type_activity") REFERENCES "TypeComplementActivity"("type_activity") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRequireSubject" ADD CONSTRAINT "CourseRequireSubject_cod_course_fkey" FOREIGN KEY ("cod_course") REFERENCES "Course"("cod_course") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseRequireSubject" ADD CONSTRAINT "CourseRequireSubject_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "Subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectStudent" ADD CONSTRAINT "SubjectStudent_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "Subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectStudent" ADD CONSTRAINT "SubjectStudent_register_fkey" FOREIGN KEY ("register") REFERENCES "Student"("register") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRequireSubject" ADD CONSTRAINT "SubjectRequireSubject_cod_course_fkey" FOREIGN KEY ("cod_course") REFERENCES "Course"("cod_course") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRequireSubject" ADD CONSTRAINT "SubjectRequireSubject_subject_code_fkey" FOREIGN KEY ("subject_code") REFERENCES "Subject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubjectRequireSubject" ADD CONSTRAINT "SubjectRequireSubject_require_s_code_fkey" FOREIGN KEY ("require_s_code") REFERENCES "CourseRequireSubject"("subject_code") ON DELETE RESTRICT ON UPDATE CASCADE;
