Algoritmo "Tri�ngulos"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Se��o de Declara��es das vari�veis 
  l1, l2, l3:real
  eq, es, tri: logico

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    escreval("Vamos formar um tri�ngulo?")
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
    escreval("Com esses valores n�o d� pra formar tri�ngulos!")
    senao
    se eq = verdadeiro entao
    escreval( "Este tri�ngulo � equilatero!")
    senao
    se es = verdadeiro entao
    escreval ("O tri�ngulo � escaleno!")
    senao
    escreval ("O tri�ngulo � isoceles!")
    fimse
    fimse
    fimse
    

    

Fimalgoritmo