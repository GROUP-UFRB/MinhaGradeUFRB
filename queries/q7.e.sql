/*Com as matérias já executadas pelo aluno neste curso, 
 qual a porcentagem de carga horária total para o aluno executada em relação ao total?*/
with total_carga_horaria_curso as (
    SELECT
        sum(workload) as carga_horaria_total_curso
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON crs.subject_id = s.subject_id
    WHERE
        crs.cod_course = 'BCET'
),
total_carga_horaria_aluno as (
    SELECT
        sum(workload) as carga_horaria_total_aluno
    FROM
        "SubjectStudent" ss
        JOIN "Subject" s ON s.subject_code = ss.subject_code
        JOIN "CourseRequireSubject" crs ON crs.subject_id = s.subject_id
    WHERE
        ss.student_id = 2
        and ss.status = 'aprovado'
)
SELECT
    (
        cast(carga_horaria_total_aluno as float8) / carga_horaria_total_curso
    ) as porcentagem_carga_horario_restante
FROM
    total_carga_horaria_curso,
    total_carga_horaria_aluno