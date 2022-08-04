/**Qual o índice de aprovação das matérias de determinado centro?*/
with r1 as (
  SELECT
    s.subject_code,
    count(ss.subject_code) as qtd_approved
  FROM
    "SubjectStudent" ss
    JOIN "Subject" s ON ss.subject_code = s.subject_code
  WHERE
    s.cod_center = 'CETEC'
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
  WHERE
    s.cod_center = 'CETEC'
    and ss.status != 'cursando'
  GROUP BY
    s.subject_code
)
SELECT
  r1.subject_code,
  Cast(r1.qtd_approved as float) / r2.qtd_registers as indice_aprovacao
FROM
  r1,
  r2
WHERE
  r1.subject_code = r2.subject_code