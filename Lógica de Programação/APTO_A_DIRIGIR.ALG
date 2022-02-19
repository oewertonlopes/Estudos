Algoritmo "Apto_a_dirigir"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   ano, nasc, idade:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("------------------------")
   escreval("DEPARTAMENTO DE TRÂNSITO")
   escreval("------------------------")
   escreva("Ano atual (yyyy): ")
   leia(ano)
   escreva("Ano de nascimento (yyyy): ")
   leia(nasc)

   idade <-(ano-nasc)
   escreval("")
   escreval("------- STATUS --------")
   escreval("Idade :",idade, " anos.")

   Se (idade>=18)entao
      escreval("Você está apta a dirigir.")
   senao
      escreval("Você ainda não pode tirar a habilitação.")
   fimse
   escreval("------------------------")

Fimalgoritmo