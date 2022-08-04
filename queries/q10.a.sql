/* Para cada matéria, qual a quantidade de alunos que não pegou mas pode pegar? */
with materias_nao_pegas as (
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight,
        st.register
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON s.subject_code = crs.subject_code
        JOIN "Course" c ON c.cod_course = crs.cod_course
        JOIN "Student" st ON st.cod_course = c.cod_course
    WHERE
        crs.cod_course = 'BCET'
        and st.cod_course = 'BCET'
    EXCEPT
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight,
        ss.register
    FROM
        "SubjectStudent" ss
        JOIN "Subject" s ON s.subject_code = ss.subject_code
        JOIN "CourseRequireSubject" crs ON crs.subject_code = s.subject_code
    WHERE
        ss.status = 'aprovado'
        and crs.cod_course = 'BCET'
),
id_materias_bloqueadas as (
    SELECT
        srs.require_s_code,
        mnp.register
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
),
retorno as (
    SELECT
        mnp.subject_code,
        mnp.name,
        mnp.workload,
        mnp.weight,
        mnp.register
    FROM
        "materias_nao_pegas" mnp
    EXCEPT
    SELECT
        distinct mnpp.subject_code,
        mnpp.name,
        mnpp.workload,
        crs.weight,
        mnpp.register
    FROM
        "materias_nao_pode_pegar" mnpp
        JOIN "CourseRequireSubject" crs ON crs.subject_code = mnpp.subject_code
    WHERE
        cod_course = 'BCET'
    order by
        register,
        weight desc
)
SELECT
    subject_code,
    count(register) as quantidade
FROM
    retorno
GROUP BY
    subject_code