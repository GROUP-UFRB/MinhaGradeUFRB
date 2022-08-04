/*Qual a porcentagem de carga horária complementar para o aluno executada em relação ao total?*/
with carga_horaria_complementar_curso as (
    SELECT
        "workload_S_complement" as carga_horaria_complementar_curso
    FROM
        "Course" co
    WHERE
        co.cod_course = 'BCET'
),
carga_horaria_complementar_aluno as (
    SELECT
        sum(tca.value) as carga_horaria_complementar_aluno
    FROM
        "ComplementActivity" ca
        JOIN "TypeComplementActivity" tca ON tca.type_activity = ca.type_activity
    WHERE
        ca.register = '201811509'
)
SELECT
    (
        cast(carga_horaria_complementar_aluno as float8) / carga_horaria_complementar_curso
    ) as porcentagem_carga_horaria_complementar
FROM
    carga_horaria_complementar_curso,
    carga_horaria_complementar_aluno