/*
query: Quais as matérias faltam ser pegas pelo aluno?
*/

select sub.name, sub.cod_center, sub.weight, sub.workload

from minhagrade.CourseRequireSubject c_r_s, minhagrade.SubjectStudent s_s
    minhagrade.Subject sub, minhagrade.Student s
    where 
        s.student_id        = student_id
        and c_r_s.course_id = s.course_id
        and sub.subject_id  = c_r_s.subject_id
        and s_s.student_id  = student_id
        and s_s.status     != "approved"
        and sub.subject_id  = s_s.subject_id
