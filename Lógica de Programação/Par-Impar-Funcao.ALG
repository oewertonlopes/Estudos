Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Seção de Declarações das variáveis
   n1:inteiro
   resultado:caractere

funcao IP(x:inteiro) :caractere
var
   r:caractere
inicio

   se (x%2=0) entao
      r <- "par"
   senao
      r <- "impar"
   fimse
   retorne r

fimfuncao
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Digite um número: ")
   leia(n1)

   resultado <- IP(n1)
   escreva("O número ", n1 ," é ", resultado, ".")
Fimalgoritmo