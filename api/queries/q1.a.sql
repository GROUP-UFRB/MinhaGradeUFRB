/*Query: "Qual a porcentagem de carga horária executada para o aluno em relação ao total?" */
/*TODO assert we have register: to specific student */

with workload_optional as (
    select sum(sub.workload) as wld_opt
        from minhagrade.CourseRequireSubject c_r_s, minhagrade.Student s, 
        minhagrade.Subject sub, minhagrade.SubjectStudent s_s

        where 
            s.register              = register
            and c_r_s.cod_course    = s.course_id /* get all subject of this course */
            and c_r_s.optional      = true
            and sub.subject_id      = c_r_s.subject_id /* limit to only optional subjects */
            and s_s.subject_id      = sub.subject_id /* get information about the situation of this student with this subject */
            and s_s.status          = "approved" /* limit to get only completed subjects */
)

with workload_required as (
    select sum(sub.workload) as wld_rqd
        from minhagrade.CourseRequireSubject c_r_s, minhagrade.Student s, 
        minhagrade.Subject sub, minhagrade.SubjectStudent s_s

        where 
            s.register              = register
            and c_r_s.cod_course    = s.course_id /* get all subject of this course */
            and c_r_s.optional      = false
            and sub.subject_id      = c_r_s.subject_id /* limit to only optional subjects */
            and s_s.subject_id      = sub.subject_id /* get information about the situation of this student with this subject */
            and s_s.status          = "approved" /* limit to get only completed subjects */
)

select sum(wopt.workload)/(c.workload_S_optional) as ratio_optional, sum(wopt.workload)/(c.workload_S_optional) as ratio_required

    from workload_optional wopt, workload_required wrqd, minhagrade.Course c, minhagrade.Student s

    where
        s.register   = register 
        c.cod_course = s.course_id
        



