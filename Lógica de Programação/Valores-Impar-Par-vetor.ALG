Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/03/2022
Var
   // Seção de Declarações das variáveis
   valor: vetor[1..7] de inteiro
   posicao,somaImpar, somaPar, soma, contador, totalPar, totalImpar:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   totalPar <- 0
   totalImpar <- 0
   soma <- 0
   somaImpar <- 0
   somaPar <- 0
   para contador <- 1 ate 7 faca
      escreva("Digite o ", contador, "º número: ")
      leia(valor[contador])
      se (valor[contador]%2=0) entao
         totalPar <- totalPar + 1
         somaPar <- valor[contador] + somaPar
         escreval("Este número é par. e está na posição: ", contador)
      senao
         totalImpar <- totalImpar + 1
         somaImpar <- valor[contador] + somaImpar
         escreval("Este número é ímpar. e está na posição: ", contador)
      fimse
      soma <- valor[contador] + soma
      escreval("")
   fimpara
   para contador <- 1 ate 7 faca
      se (valor[contador]%2=0) entao
         escreval("Valor par nas posição: ", contador)
      fimse
   fimpara
   para contador <- 1 ate 7 faca
      se (valor[contador]%2<>0) entao
         escreval("Valor ímpar na posição: ", contador)
      fimse
   fimpara
   escreva("Informe a posição do número que você gostaria de ver: ")
   leia(posicao)
   escreval("O total de numeros pares digitados foi:", totalPar)
   escreval("O total de numeros impares digitados foi:", totalImpar)
   escreval("A Soma dos números digitados foi:", soma)
   escreval("A Soma dos números Ímpares digitados foi:", somaImpar)
   escreval("A Soma dos números Pares digitados foi:", somaPar)
   escreva("O número na posição ", posicao ,  " é ", valor[posicao])
Fimalgoritmo

