Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
   i:inteiro
   nome,nomePesado:caractere
   maiorPeso,peso:real
procedimento cabecalho()
inicio
   limpatela
   escreval("--------------------------------------")
   escreval("D E T E C T O R    D E    P E S A D O ")
   escreval("Maior peso at� agora: ", maiorPeso , "Kg")
   escreval("--------------------------------------")
fimprocedimento
Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

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