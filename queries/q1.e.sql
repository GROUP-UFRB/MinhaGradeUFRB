/*Qual a porcentagem de carga horária executada em relação ao total para um semestre em específico?*/
with total_carga_horaria_curso as (
    SELECT
        sum(workload) as carga_horaria_total_curso
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON crs.subject_code = s.subject_code
    WHERE
        crs.cod_course = 'BCET'
),
total_carga_horaria_aluno as (
    SELECT
        sum(workload) as carga_horaria_total_aluno
    FROM
        "SubjectStudent" ss
        JOIN "Subject" s ON s.subject_code = ss.subject_code
        JOIN "CourseRequireSubject" crs ON crs.subject_code = s.subject_code
    WHERE
        crs.cod_course = 'BCET'
        and ss.register = '201811509'
        and ss.status = 'aprovado'
        and ss.semester = '1'
)
SELECT
    (
        cast(carga_horaria_total_aluno as float8) / carga_horaria_total_curso
    ) as porcentagem_carga_horario
FROM
    total_carga_horaria_curso,
    total_carga_horaria_aluno