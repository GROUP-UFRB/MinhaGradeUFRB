/*Query: "Quais as matérias que o aluno não pode pegar?" */
/*TODO assert we have student_id to specific student
       assert we have cod_course to specific student        
*/
/*
1 - TODAS MATERIAS DO CURSO
2 - TODAS MATERIAS QUE USUARIO PEGOU E FOI APROVADO
R = 1 - 2
R -> MATERIAS DO CURSO QUE USUARIO NAO PEGOU OU NAO FOI APROVADO
3 - MATERIAS QUE PRE-REQUISITO NÃO ESTÁ EM 2
*/
with materias_não_pegas as (
    select 
        s_b.subject_id, s_b.weight, s_b.name, s_b.workload
    from 
        minhagrade.Subject s_b, minhagrade.CourseRequireSubject c_r_s
    where  
        c_r_s.cod_course = cod_course and c_r_s.subject_id = s_b.subject_id
    except
        select 
            s_b.subject_id, s_b.weight, s_b.name, s_b.workload
        from 
            minhagrade.Subject s_b, minhagrade.SubjectStudent s_s 
        where 
            s_s.student_id = student_id and s_b.subject_id = s_s.subject_id and s_s.status = "Approved"
),
    materias_pegas as (
    select 
        s_b.subject_id, s_b.weight, s_b.name, s_b.workload
    from 
        minhagrade.Subject s_b, minhagrade.SubjectStudent s_s 
    where 
        s_s.student_id = student_id and s_b.subject_id = s_s.subject_id and s_s.status = "Approved"
)

select 
    m_n_p.subject_id, m_n_p.weight, m_n_p.name, m_n_p.workload
from 
    materias_não_pegas m_n_p, minhagrade.SubjectRequireSubject s_r_s, materias_pegas m_p
where
    m_n_p.subject_id = s_r_s.subject_id and s_r_s.require_s_id != m_p.subject_id

