/*
Query: Quais as matérias que precisam ser pegas, por ordem de peso?
*/
/*
TODO assert provide student_id
*/
select sub.subject_id, sub.name, sub.cod_center, sub.weight, sub.workload 

    from minhagrade.Subject sub, minhagrade.Course c, minhagrade.Student s,
    minhagrade.CourseRequireSubject c_r_s

        where
            s.student_id        = student_id
            and c_r_s.course_id = s.course_id
            and sub.subject_id  = c_r_s.subject_id
    order by sub.weight