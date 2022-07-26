/*
query: Qual a porcentagem de carga horária complementar 
para o aluno executada em relação ao total?
*/

/*TODO assert provide register */

select sum(c.value) / c.workload_s_complement as ratio_cplt_actvty
    
    from minhagrade.ComplementActivity ca, minhagrade.Student s,
    minhagrade.Course c
    
    where
        s.register          = register
        and ca.register     = register
        and c.cod_course    = s.course_id
