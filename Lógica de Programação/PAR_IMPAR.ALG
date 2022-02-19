Algoritmo "PAR_IMPAR"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   numero: inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("-------------------")
   escreval("")
   escreval("Informe um número: ")
   escreval("")
   escreval("-------------------")
   escreval("")
   leia(numero)
   se ((numero%2)=0) entao
      escreval("")
      escreval("O número que você digitou é par!")
   senao
      escreval("")
      escreval (" O número que você digitou é ímpar!")
   fimse

Fimalgoritmo