/*
Query: Quais as matérias que precisam ser pegas, por ordem de peso?
*/
/*
TODO assert provide student_id
*/
SELECT
	s.subject_id, s.name, s.cod_center, crs.weight, s.workload 
FROM
	"CourseRequireSubject" crs
JOIN
	"Subject" s
ON
	s.subject_id = crs.subject_id
WHERE
    crs.cod_course = 'BCET'
EXCEPT
	SELECT
  	s.subject_id, s.name, s.cod_center, crs.weight, s.workload 
	FROM
  	"SubjectStudent" ss
  JOIN
		"Subject" s
	ON
		s.subject_code = ss.subject_code
  JOIN
  	"CourseRequireSubject" crs
  ON
		s.subject_id = crs.subject_id
  WHERE
  	ss.student_id = 2
    AND ss.status = 'aprovado'
    AND crs.cod_course = 'BCET'
  ORDER BY weight