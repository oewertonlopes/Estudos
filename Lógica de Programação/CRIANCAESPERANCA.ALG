Algoritmo "criancaEsperanca"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   v:inteiro
   valor:real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("---------------------------------")
   escreval("        CRIAN�A ESPERAN�A        ")
   escreval("---------------------------------")
   escreval("Muito obrigado por ajudar!")
   escreval("")
   escreval("Digite [1] para doar R$ 5,00 reais")
   escreval("Digite [2] para doar R$ 25,00 reais")
   escreval("Digite [3] para doar R$ 50,00 reais")
   escreval("Digite [4] para doar outros valores")
   escreval("Digite [5] para Cancelar")
   escreval("")
   leia(v)
   escreval("")

   escolha(v)
   caso (1)
      escreval("Voc� doou 5 reais, obrigado pela sua contribui��o!")
   caso (2)
      escreval("Voc� doou 25 reais, obrigado pela sua contribui��o!")
   caso (3)
      escreval("Voc� doou 50 reais, obrigado pela sua contribui��o!")
   caso(4)
      escreval("Informe o valor que voc� pode contribuir:")
      leia(valor)
      escreval("")
      escreval("Voc� contribuiu com R$ ", valor:5:2, " reais obrigado pela sua contribui��o!")
      escreval("")
   outrocaso
      escreval("Voc� n�o contribuiu, obrigado pela aten��o.")
   fimescolha

Fimalgoritmo