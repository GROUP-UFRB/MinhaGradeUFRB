/*
 Query: Quais as matérias de maior peso do curso?
 */
/*
 TODO assert provide student_id
 */
SELECT
	sub.subject_code,
	sub.name,
	sub.cod_center,
	crs.weight,
	sub.workload
FROM
	"CourseRequireSubject" crs
	JOIN "Subject" sub ON sub.subject_code = crs.subject_code
WHERE
	crs.cod_course = 'BCET'
ORDER BY
	crs.weight DESC
LIMIT
	5