Algoritmo "Dependentes_funcionario"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   fun:caractere
   salAbo, sal, qtd:real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Informe o nome do Funcion�rio: ")
   leia(fun)
   escreval("Informe Sal�rio do funcion�rio: ")
   leia(sal)
   escreval("Informe a quantidade de dependentes que ele possui: ")
   escreval("[0]")
   escreval("[1]")
   escreval("[2]")
   escreval("[3]")
   escreval("[4]")
   escreval("[5 ou mais.]")
   escreval("")
   leia(qtd)

   escolha (qtd)
   caso (0)
      salAbo<-(sal+(sal*5)/100)
   caso (1)
      salAbo<-(sal+(sal*10)/100)
   caso (2)
      salAbo<-(sal+(sal*12)/100)
   caso (3)
      salAbo<-(sal+(sal*15)/100))
   caso (4)
      salAbo<-(sal+(sal*20)/100)
   outrocaso
      salAbo<-(sal+(sal*25)/100)

   fimescolha
   escreval("")
   escreval(fun, " possui", qtd, " dependentes e o sal�rio ser� de: R$",salAbo:5:2, " Reais.")
Fimalgoritmo