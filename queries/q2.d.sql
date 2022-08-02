/* Quais as matérias o aluno pode pegar?*/
with materias_nao_pegas as (
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON s.subject_id = crs.subject_id
    WHERE
        crs.cod_course = 'BCET'
    EXCEPT
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight
    FROM
        "SubjectStudent" ss
        JOIN "Subject" s ON s.subject_code = ss.subject_code
        JOIN "CourseRequireSubject" crs ON crs.subject_id = s.subject_id
    WHERE
        ss.student_id = 1
        and ss.status = 'aprovado'
        and crs.cod_course = 'BCET'
),
id_materias_bloqueadas as (
    SELECT
        srs.require_s_id
    FROM
        "materias_nao_pegas" mnp
        JOIN "SubjectRequireSubject" srs ON srs.subject_code = mnp.subject_code
),
materias_nao_pode_pegar as (
    /*Materias que não podem ser pegas*/
    SELECT
        distinct *
    FROM
        "id_materias_bloqueadas" r1
        JOIN "Subject" s ON s.subject_id = r1.require_s_id
)

SELECT
    mnp.subject_code,
    mnp.name,
    mnp.workload,
    mnp.weight
FROM
   "materias_nao_pegas" mnp
EXCEPT
SELECT
    distinct mnpp.subject_code,
    mnpp.name,
    mnpp.workload,
    crs.weight
FROM
    "materias_nao_pode_pegar" mnpp
    JOIN "CourseRequireSubject" crs ON crs.subject_id = mnpp.subject_id
WHERE
    crs.cod_course = 'BCET'
order by
    name