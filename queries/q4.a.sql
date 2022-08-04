/*
 Quais as próximas x matérias de maior prioridade?
 */
SELECT
    s.subject_code,
    s.name,
    s.workload,
    crs.weight
FROM
    "CourseRequireSubject" crs
    JOIN "Subject" s ON s.subject_code = crs.subject_code
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
ORDER BY
    weight DESC
LIMIT
    6
    /*x*/