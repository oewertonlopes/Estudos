Algoritmo "Apto_a_dirigir"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   ano, nasc, idade:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("------------------------")
   escreval("DEPARTAMENTO DE TR�NSITO")
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
      escreval("Voc� est� apta a dirigir.")
   senao
      escreval("Voc� ainda n�o pode tirar a habilita��o.")
   fimse
   escreval("------------------------")

Fimalgoritmo