/*
Query: Quantas matérias o aluno está tendo aprovação em média por semestre?
*/

with not_aproved_subjects as (
    select s_s.semester, count(sub.subject_id) as count_appr

    from minhagrade.Subject sub, minhagrade.SubjectStudent s_s
        where 
            s_s.student_id      = student_id
            and s_s.status      = "Approved"

    group by s_s.semester
)

select mean(n_a_s.count_appr) as mean_appr

    from not_aproved_subjects n_a_s

