/*Query: "Quais matérias já foram pegas pelo aluno?" */
/*TODO assert we have subject_id: to specific student */

select * from minhagrade.SubjectStudent as s_s
where s_s.subject_id = subject_id