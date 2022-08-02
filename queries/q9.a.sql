/*Quais são as disciplinas que mais possuem reprovações?*/

SELECT
	subject_code, COUNT(subject_code) as reprovacoes
FROM
	"SubjectStudent" ss
WHERE
	ss.status = 'reprovado'
GROUP BY subject_code
ORDER BY reprovacoes DESC