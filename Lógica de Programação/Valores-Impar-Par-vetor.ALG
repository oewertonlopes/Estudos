Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Se��o de Declara��es das vari�veis
   valor: vetor[1..7] de inteiro
   posicao,somaImpar, somaPar, soma, contador, totalPar, totalImpar:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   totalPar <- 0
   totalImpar <- 0
   soma <- 0
   somaImpar <- 0
   somaPar <- 0
   para contador <- 1 ate 7 faca
      escreva("Digite o ", contador, "� n�mero: ")
      leia(valor[contador])
      se (valor[contador]%2=0) entao
         totalPar <- totalPar + 1
         somaPar <- valor[contador] + somaPar
         escreval("Este n�mero � par. e est� na posi��o: ", contador)
      senao
         totalImpar <- totalImpar + 1
         somaImpar <- valor[contador] + somaImpar
         escreval("Este n�mero � �mpar. e est� na posi��o: ", contador)
      fimse
      soma <- valor[contador] + soma
      escreval("")
   fimpara
   para contador <- 1 ate 7 faca
      se (valor[contador]%2=0) entao
         escreval("Valor par nas posi��o: ", contador)
      fimse
   fimpara
   para contador <- 1 ate 7 faca
      se (valor[contador]%2<>0) entao
         escreval("Valor �mpar na posi��o: ", contador)
      fimse
   fimpara
   escreva("Informe a posi��o do n�mero que voc� gostaria de ver: ")
   leia(posicao)
   escreval("O total de numeros pares digitados foi:", totalPar)
   escreval("O total de numeros impares digitados foi:", totalImpar)
   escreval("A Soma dos n�meros digitados foi:", soma)
   escreval("A Soma dos n�meros �mpares digitados foi:", somaImpar)
   escreval("A Soma dos n�meros Pares digitados foi:", somaPar)
   escreva("O n�mero na posi��o ", posicao ,  " � ", valor[posicao])
Fimalgoritmo

