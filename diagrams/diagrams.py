from types import *

class People():
    name : char
    people_id: char
    email: char
    password: char

    def primary_key(self, people_id):
        return people_id

class Student(People):
    
    student_id: char #stdent register
    course_id: Course #A student can have only one course at time
    score: float
    def primary_key(self, student_id):
        return student_id

class Center():

    center_id : char
    name : char

    def primary_key(self, center_id):
        return center_id

class Subject():
    subject_id : char

    name : char
    center_id : Center
    workload: int

    def primary_key(self, subject_id):
        return subject_id

class Course():
    course_id: char
    name: char
    workload_S_required: int
    workload_S_optional: int

    def primary_key(self, course_id):
        return course_id

class Error():

    error_id: char
    msg: text
    title: char
    date: date
    people_id: People

    def primary_key(self, error_id):
        return error_id
    
    def foreign_key(self, people_id) -> Reference(People):
        return people_id


class ComplementActivity():

    id_complement: char
    title: char
    type_activity: char
    value: float
    unit: char
    qtd_max: int #all complementary activities have a max quantity

    def primary_key(self, id_complement):
        return id_complement

class CompltActivityStudent():

    id_student: Student
    id_complement: ComplementActivity
    
    def primary_key(self, id_student, id_complement):
        return id_student, id_complement


class CourseRequireSubject():
    #one course have many subjects
    course_id : Course
    subject_id: Subject
    optional: bool
    weight: int

    def primary_key(self, course_id, subject_id):
        return course_id, subject_id


class SubjectStudent():
    subject_id : Subject #the discipline of the student
    student_id: Student #the student
    status: char #approved, disapproved, registered or locked
    score: float
    semester: char

    def primary_key(self, subject_id, student_id): 
        return subject_id, student_id

    def foreign_key(self, subject_id, student_id) -> Reference(Subject, Student) :
        return subject_id, student_id

class SubjectRequireSubject():

    subject_id : Subject
    require_s_id: Subject
    course_id: Course

    def primary_key(self, subject_id, require_s_id):
        return subject_id, require_s_id