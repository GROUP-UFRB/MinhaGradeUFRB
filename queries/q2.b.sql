/*
query: Quais as matérias faltam ser pegas pelo aluno?
*/

SELECT
	s.name, s.subject_code, s.workload
FROM
	"CourseRequireSubject" crs
JOIN
	"Subject" s
ON
	crs.subject_id = s.subject_id
EXCEPT
	SELECT 
  	s.name, s.subject_code, s.workload
  FROM
  	"SubjectStudent" ss
  JOIN
  	"Subject" s
  ON
  	ss.subject_code = s.subject_code
  WHERE
    ss.status != 'reprovado'
    and ss.student_id = 1
  ORDER BY name