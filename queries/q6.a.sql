/*
 Query: Qual o índice de aprovação de determinada matéria?
 */
with resultados as (
    SELECT
        s.subject_code,
        count(subject_student_id) as todos_resultados
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON s.subject_id = crs.subject_id
        JOIN "SubjectStudent" ss ON ss.subject_code = s.subject_code
    WHERE
        crs.cod_course = 'BCET'
        and ss.subject_code = 'CCA310'
        and ss.status != 'cursando'
    GROUP BY
        s.subject_code
),
aprovados as (
    SELECT
        s.subject_code,
        count(subject_student_id) as todos_aprovados
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON s.subject_id = crs.subject_id
        JOIN "SubjectStudent" ss ON ss.subject_code = s.subject_code
    WHERE
        crs.cod_course = 'BCET'
        and ss.subject_code = 'CCA310'
        and ss.status = 'aprovado'
    GROUP BY
        s.subject_code
)
SELECT
    re.subject_code,
    (cast(todos_aprovados as float) / todos_resultados) as indice_aprovacao
FROM
    "resultados" re,
    "aprovados" ap