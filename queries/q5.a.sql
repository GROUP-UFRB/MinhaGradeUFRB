/*
 Query: Quantas matérias o aluno está tendo aprovação em média por semestre?
 */
with materias_por_semestre as (
	SELECT
		semester,
		count(ss.subject_code) as materias
	FROM
		"SubjectStudent" ss
		JOIN "Subject" s ON s.subject_code = ss.subject_code
	WHERE
		ss.register = '201811509'
	GROUP BY
		semester
),
aprovacoes_por_semestre as (
	SELECT
		semester,
		count(ss.subject_code) as aprovacoes
	FROM
		"SubjectStudent" ss
		JOIN "Subject" s ON s.subject_code = ss.subject_code
	WHERE
		ss.register = '201811509'
		and ss.status = 'aprovado'
	GROUP BY
		semester
)
SELECT
	ma.semester,
	ma.materias,
	ap.aprovacoes,
	(cast(ap.aprovacoes as float) / ma.materias) as indice
FROM
	"materias_por_semestre" ma,
	"aprovacoes_por_semestre" ap
WHERE
	ma.semester = ap.semester