Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
   par,nulo,divisivel,soma,contador, n, valor:inteiro
   media:Real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   n <-1
   soma <-0
   divisivel <-0
   nulo <-0
   par<-0
   para contador <- 1 ate 5 faca
      escreva("Informe o ", n ,"� valor: ")
      leia(valor)
      n <- n+1
      soma <- soma+valor
      media <-soma/5
      se (valor%5=0) entao
         divisivel <- divisivel+1
      fimse
      se (valor=0)entao
         nulo<-nulo+1
      fimse
      se (valor%2=0) entao
         par<-valor+par
      fimse
   fimpara
   escreval("A soma entre os valores � ", soma)
   escreval("A m�dia entre os valores � ", media)
   escreval("Valores divisiveis por 5 ", divisivel)
   escreval("Valores nulos ", nulo)
   escreval("A soma dos valores pares � ", par)

Fimalgoritmo