Algoritmo "Triângulos"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Seção de Declarações das variáveis 
  l1, l2, l3:real
  eq, es, tri: logico

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Vamos formar um triângulo?")
    escreval ("Me informa o primeiro lado:")
    leia (l1)
    escreval ("Me informa agora o segundo lado:")
    leia(l2)
    escreval ("E por fim, o terceiro:")
    leia(l3)
    
    eq <- ((l1=l2)e(l2=l3))
    es <- ((l1<>l2)e (l2<>l3) e (l1<>l3))
    tri <- ((l1<l2+l3) e (l2<l1+l3) e (l3<l1+l2))
    
    se tri = falso entao
    escreval("Com esses valores não dá pra formar triângulos!")
    senao
    se eq = verdadeiro entao
    escreval( "Este triângulo é equilatero!")
    senao
    se es = verdadeiro entao
    escreval ("O triângulo é escaleno!")
    senao
    escreval ("O triângulo é isoceles!")
    fimse
    fimse
    fimse
    

    

Fimalgoritmo