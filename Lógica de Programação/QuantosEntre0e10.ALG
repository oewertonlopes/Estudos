Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Se��o de Declara��es das vari�veis
   somador, contador, valor, impar:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   somador <-0
   impar <-0
   para contador <- 1 ate 6 passo 1 faca
      escreva("Informe um valor: ")
      leia(valor)
      se (valor >= 0) e (valor <= 10) entao
         somador <- somador + 1
      fimse
      se (valor%2=1) e (valor >=0) e (valor <=10) entao
         impar <- valor + impar
      fimse

   fimpara
   escreval ("total de numeros entre 0 e 10 �: ", somador)
   escreval ("total da soma entre numeros impares �: ", impar)


Fimalgoritmo