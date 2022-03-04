Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Seção de Declarações das variáveis
   somador, contador, valor, impar:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
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
   escreval ("total de numeros entre 0 e 10 é: ", somador)
   escreval ("total da soma entre numeros impares é: ", impar)


Fimalgoritmo