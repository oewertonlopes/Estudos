Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Seção de Declarações das variáveis
   ini, final, contador, numero, soma :inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   
   soma <-0
   escreva("Informe o início: ")
   leia(ini)
   escreva("informe o final: ")
   leia(final)
   para contador <- ini ate final faca
      escreval("Informe um valor: ")
      leia(numero)
      soma <- soma+numero
   fimpara
   escreval("A soma é ", soma)
Fimalgoritmo