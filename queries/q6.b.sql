/**Qual o índice de aprovação das matérias de determinado curso?*/
with r1 as (
  SELECT
    s.subject_code,
    count(ss.subject_code) as qtd_approved
  FROM
    "SubjectStudent" ss
    JOIN "Subject" s ON ss.subject_code = s.subject_code
    JOIN "CourseRequireSubject" crs ON s.subject_code = crs.subject_code
  WHERE
    crs.cod_course = 'BCET'
    and ss.status = 'aprovado'
  GROUP BY
    s.subject_code
),
r2 as (
  SELECT
    s.subject_code,
    count(ss.subject_code) as qtd_registers
  FROM
    "SubjectStudent" ss
    JOIN "Subject" s ON ss.subject_code = s.subject_code
    JOIN "CourseRequireSubject" crs ON s.subject_code = crs.subject_code
  WHERE
    crs.cod_course = 'BCET'
    and ss.status != 'cursando'
  GROUP BY
    s.subject_code
)
SELECT
  r2.subject_code,
  Cast(r1.qtd_approved as float) / r2.qtd_registers as indice_aprovacao
FROM
  r2
  LEFT JOIN r1 ON r1.subject_code = r2.subject_code