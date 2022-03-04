Algoritmo "calculo_fatorial"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 01/03/2022
Var
   // Seção de Declarações das variáveis
   n,c,f : inteiro
   r:caracter

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   repita
      escreva("Informe o número que deseja realizar a fatoração: ")
      leia(n)
      c <- n
      f <- 1
      repita
         f <- f*c
         c <- c-1

      ate(c < 1)
      escreval ("Fatorial de ", n ," é: ",f)
      escreva("Quer continuar? [s/n]: ")
      leia(r)
      limpatela
   ate (r = "n")
Fimalgoritmo