/* Para cada matéria, qual a quantidade de alunos que não pegou mas pode pegar? */

with materias_nao_pegas as (
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight,
  			st.student_id
    FROM
        "CourseRequireSubject" crs
        JOIN "Subject" s ON s.subject_id = crs.subject_id
  			JOIN "Course" c ON c.cod_course = crs.cod_course
  			JOIN "Student" st ON st.course_id = c.course_id
    WHERE
        crs.cod_course = 'BCET'
  			and st.course_id = 1
    EXCEPT
    SELECT
        s.subject_code,
        s.name,
        s.workload,
        crs.weight,
  			ss.student_id
    FROM
        "SubjectStudent" ss
        JOIN "Subject" s ON s.subject_code = ss.subject_code
        JOIN "CourseRequireSubject" crs ON crs.subject_id = s.subject_id
    WHERE
        ss.status = 'aprovado'
        and crs.cod_course = 'BCET'
),
id_materias_bloqueadas as (
    SELECT
        srs.require_s_id, mnp.student_id
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
), retorno as (
   SELECT
      mnp.subject_code,
      mnp.name,
      mnp.workload,
      mnp.weight,
      mnp.student_id
  FROM
     "materias_nao_pegas" mnp
  EXCEPT
  SELECT
      distinct mnpp.subject_code,
      mnpp.name,
      mnpp.workload,
      crs.weight,
      mnpp.student_id
  FROM
      "materias_nao_pode_pegar" mnpp
      JOIN "CourseRequireSubject" crs ON crs.subject_id = mnpp.subject_id
  WHERE
      cod_course = 'BCET'
  order by
      student_id, weight desc
)

SELECT 
	subject_code, count(student_id) as quantidade
FROM
	retorno
GROUP BY subject_code