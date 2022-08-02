/*Qual a porcentagem de aprovação em uma determinada disciplina?*/
with matriculas as (
    SELECT
        ss.subject_code,
        count(ss.subject_code) as matriculas
    FROM
        "SubjectStudent" ss
    WHERE
        ss.subject_code = 'CET146'
    GROUP BY
        ss.subject_code
),
aprovados as (
    SELECT
        ss.subject_code,
        count(ss.subject_code) as aprovacoes
    FROM
        "SubjectStudent" ss
    WHERE
        ss.status = 'aprovado'
        and ss.subject_code = 'CET146'
    GROUP BY
        ss.subject_code
)
SELECT
    ap.subject_code,
    (cast(aprovacoes as float) / matriculas) as indice_aprovacao
FROM
    "aprovados" ap,
    "matriculas"