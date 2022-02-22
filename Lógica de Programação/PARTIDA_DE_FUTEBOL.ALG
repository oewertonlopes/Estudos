Algoritmo "Partida_de_futebol"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   bangu, madureira, diferenca: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Bangu x Madureira")
   escreval("----------------------------")
   escreva("Quantos gols do BANGU? ")
   leia(bangu)
   escreva("Quantos gols do MADUREIRA? ")
   leia(madureira)
   diferenca <- abs(bangu-madureira)
   escreval("----------------------------")
   escreval("DIFERENÇA:", diferenca)
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