/*
Query: Quais as próximas x matérias de maior prioridade?
*/
/*
TODO assert provide student_id, x
*/
select sub.subject_id, sub.name, sub.cod_center, sub.weight, sub.workload 

    from minhagrade.Subject sub, minhagrade.Course c, minhagrade.Student s,
    minhagrade.CourseRequireSubject c_r_s, minhagrade.SubjectStudent s_s

        where
            s.student_id        = student_id
            and c_r_s.course_id = s.course_id
            and sub.subject_id  = c_r_s.subject_id
            and s_s.student_id  = student_id
            and s_s.status      = "Approved"
            and sub.subject_id != s_s.subject_id
            
    order by sub.weight

    limit x