Algoritmo "Partida_de_futebol"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   bangu, madureira, diferenca: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Bangu x Madureira")
   escreval("----------------------------")
   escreva("Quantos gols do BANGU? ")
   leia(bangu)
   escreva("Quantos gols do MADUREIRA? ")
   leia(madureira)
   diferenca <- abs(bangu-madureira)
   escreval("----------------------------")
   escreval("DIFEREN�A:", diferenca)
   se (diferenca >=3) entao
      escreval("STATUS: GOLEADA.")
   senao
      se (diferenca= 0) entao
         escreval ("STATUS: EMPATE.")
      senao
         escreval("STATUS: RESULTADO NORMAL.")
      fimse
   fimse
   escreval("----------------------------")


Fimalgoritmo