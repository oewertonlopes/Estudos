Algoritmo "calculo_fatorial"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Seção de Declarações das variáveis
   n,c,f : inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Informe o número que deseja realizar a fatoração:")
   leia(n)
   c <- n
   f <- 1
   repita
      f <- f*c
      c <- c-1

   ate(c < 1)
   escreval ("Fatorial de ", n ," é: ",f)

Fimalgoritmo