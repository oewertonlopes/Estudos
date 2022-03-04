Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Seção de Declarações das variáveis
   i:inteiro
   nome,nomePesado:caractere
   maiorPeso,peso:real
procedimento cabecalho()
inicio
   limpatela
   escreval("--------------------------------------")
   escreval("D E T E C T O R    D E    P E S A D O ")
   escreval("Maior peso até agora: ", maiorPeso , "Kg")
   escreval("--------------------------------------")
fimprocedimento
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

   para i <- 1 ate 5 faca
      cabecalho()
      escreva("Digite o nome: ")
      leia(nome)
      escreva("Digite o peso de ", nome , ":")
      leia(peso)
      se (peso > maiorPeso) entao
         maiorPeso <- peso
         nomePesado <- nome
      fimse
      limpatela
   fimpara
   cabecalho()
   escreval("A pessoa mais pesada foi ", nomePesado , ", com ", maiorPeso , " quilos.")

Fimalgoritmo