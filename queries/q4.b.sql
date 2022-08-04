/* Quais as próximas x matérias de maior prioridade que o aluno pode pegar? */
with materias_nao_pegas as (
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON s.subject_code = crs.subject_code
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
        JOIN "CourseRequireSubject" crs ON crs.subject_code = s.subject_code
    WHERE
        ss.register = '201811509'
        and ss.status = 'aprovado'
        and crs.cod_course = 'BCET'
),
id_materias_bloqueadas as (
    SELECT
        srs.require_s_code
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
        JOIN "Subject" s ON s.subject_code = r1.require_s_code
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
    JOIN "CourseRequireSubject" crs ON crs.subject_code = mnpp.subject_code
WHERE
    crs.cod_course = 'BCET'
order by
    weight desc
limit
    6