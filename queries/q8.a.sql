/*Quantos alunos estão matriculados em determinada matéria no semestre atual?*/
SELECT
    *
FROM
    "SubjectStudent" ss
WHERE
    ss.status = 'cursando'
    and ss.subject_code = 'CET095'