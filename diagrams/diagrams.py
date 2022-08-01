from types import *

class People():
    name : char
    people_id: char #email
    password: char

    def primary_key(self, people_id):
        return people_id

class Student():
    
    register: char #stdent register
    score: float
    active: int
    init_semester: char
    course_id: Course #Registered Relatioship: A student can have only one course at time
    people_id: People #CanBe Relatioship

    def primary_key(self, register):
        return register

class Center():

    cod_center : char
    name : char

    def primary_key(self, cod_center):
        return cod_center

class Subject():
    subject_id : char
    name : char
    workload: int
    cod_center : Center #From relatioship

    def primary_key(self, subject_id):
        return subject_id

class Course():
    cod_course: char
    name: char
    workload_S_required: int
    workload_S_optional: int
    cod_center: Center #From relatioship

    def primary_key(self, cod_course):
        return cod_course

class Error():

    error_id: char
    msg: text
    title: char
    date: date
    people_id: People #Notify relatioship

    def primary_key(self, error_id):
        return error_id

class CmptActvt():

    title: char
    type_activity: char
    register: Student #Have relatioship

    def primary_key(self, title, register):
        return title, register

class TypCmpt():
    type_activity: CmptActvt
    value: float

    def primary_key(self, type_activity):
        return type_activity

class CourseRequireSubject():
    
    semeter: char
    optional: int
    cod_course : Course #A Course require N subjects
    subject_id: Subject #A Subject can be required by N Courses
    weight: float
    def primary_key(self, cod_course, subject_id):
        return cod_course, subject_id

class SubjectStudent():
    status: char #approved, disapproved, registered or locked
    score: float
    semester: char
    subject_id : Subject #Subject can have N Students registered
    register: Student #Student can be registered in N Subjects

    def primary_key(self, subject_id, register): 
        return subject_id, register

class SubjectRequireSubject():

    subject_id : Subject #Subject require N CourseRequireSubjects
    require_s_id: CourseRequireSubject #CourseRequireSubject can be required by N subjects
    course_id: CourseRequireSubject #CourseRequireSubject can be required by N subjects

    def primary_key(self, subject_id, require_s_id, course_id):
        return subject_id, require_s_id, course_id

