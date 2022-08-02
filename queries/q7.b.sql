/*Com as matérias já executadas pelo aluno neste curso, 
 qual a porcentagem de carga horária optativa para o aluno executada em relação ao total?*/
with carga_horaria_opcional_curso as (
  SELECT
    "workload_S_optional" as carga_horaria_opcional_curso
  FROM
    "Course" co
  WHERE
    co.cod_course = 'BCET'
),
carga_horaria_opcional_aluno as (
  SELECT
    sum(workload) as carga_horaria_opcional_aluno
  FROM
    "SubjectStudent" ss
    JOIN "Subject" s ON s.subject_code = ss.subject_code
    JOIN "CourseRequireSubject" crs ON crs.subject_id = s.subject_id
  WHERE
    crs.cod_course = 'BCET'
    /*Curso atual*/
    and ss.student_id = 2
    and ss.status = 'aprovado'
    and crs.optional = true
)
SELECT
  (
    cast(carga_horaria_opcional_aluno as float8) / carga_horaria_opcional_curso
  ) as porcentagem_carga_horaria_opcional
FROM
  carga_horaria_opcional_curso,
  carga_horaria_opcional_aluno