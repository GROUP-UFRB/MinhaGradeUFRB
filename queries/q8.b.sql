/*Quantos alunos estão com matrícula ativa em determinado curso?*/

SELECT
	*
FROM
	"Student" s
WHERE
	s.active = true