Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Seção de Declarações das variáveis
   numero:inteiro
procedimento parImpar(valor:inteiro)
inicio
   escreval("O valor é ", valor)
   escreval("O valor de numero é ", numero)
   se (valor%2=0)entao
      escreval("Par")
   senao
      escreval("impar")
   fimse

fimprocedimento

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   escreva("Digite um numero: ")
   leia(numero)
   parImpar(numero)
Fimalgoritmo