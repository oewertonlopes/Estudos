Algoritmo "criancaEsperanca"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   v:inteiro
   valor:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("---------------------------------")
   escreval("        CRIANÇA ESPERANÇA        ")
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
      escreval("Você doou 5 reais, obrigado pela sua contribuição!")
   caso (2)
      escreval("Você doou 25 reais, obrigado pela sua contribuição!")
   caso (3)
      escreval("Você doou 50 reais, obrigado pela sua contribuição!")
   caso(4)
      escreval("Informe o valor que você pode contribuir:")
      leia(valor)
      escreval("")
      escreval("Você contribuiu com R$ ", valor:5:2, " reais obrigado pela sua contribuição!")
      escreval("")
   outrocaso
      escreval("Você não contribuiu, obrigado pela atenção.")
   fimescolha

Fimalgoritmo