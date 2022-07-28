/*
Query: Qual o índice de aprovação de determinada matéria?
*/
/*
TODO assert provide subject_id, x
*/
with aproved_subjects as (
    select 
        count(s_s.student_id) as count_appr
    from 
        SubjectStudent s_s
    where 
        s_s.subject_id = subject_id and s_s.status = "Approved"
)

select 
    count_appr/count(s_s.student_id) as indice_aprovacao 
from 
    SubjectStudent s_s
where 
    s_s.subject_id = subject_id
