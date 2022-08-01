/* Com as matérias já executadas pelo aluno neste curso, 
qual a porcentagem de carga horária obrigatória para o aluno em relação ao total em outro curso? */

with total_carga_horaria_curso as (
	SELECT
  	sum(workload) as carga_horaria_total_curso
 	FROM
  	"CourseRequireSubject" crs
  JOIN
  	"Subject" s
  ON
  	crs.subject_id = s.subject_id
  WHERE
  	crs.cod_course = 'BCET' /*Curso objetivo*/
  	and crs.optional = false
),
	total_carga_horaria_aluno as (
	SELECT
    sum(workload) as carga_horaria_total_aluno
  FROM
    "SubjectStudent" ss
  JOIN
    "Subject" s
  ON
    s.subject_code = ss.subject_code
  JOIN
    "CourseRequireSubject" crs
  ON
    crs.subject_id = s.subject_id
  WHERE
    crs.cod_course = 'BCET' /*Curso atual*/
    and ss.student_id = 2
    and ss.status = 'aprovado'
    and crs.optional = false
)

SELECT
	(cast(carga_horaria_total_aluno as float8)/ carga_horaria_total_curso) as carga_horario_restante
FROM 
	total_carga_horaria_curso, total_carga_horaria_aluno