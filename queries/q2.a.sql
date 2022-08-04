/*Query: "Quais matérias já foram pegas pelo aluno?" */
select
    *
from
    "SubjectStudent" as ss
where
    ss.register = '201811509'