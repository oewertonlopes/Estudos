Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/02/2022
Var
   // Seção de Declarações das variáveis
   n1, n2, operacao, resultado:real
   operador:caracter

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Informe primeiro número: ")
   leia(n1)
   escreval("")
   escreval("Informe operação Matemática")
   escreval("[1]Soma")
   escreval("[2]Subtração")
   escreval("[3]Multiplicação")
   escreval("[4]Divisão")
   escreval("[5]Potenciação")
   escreval("")
   leia(operacao)
   escreval("")
   escreva("Informe segundo número: ")
   leia(n2)

   escolha (operacao)
   caso(1)
      resultado <- (n1+n2)
      operador <- ("soma")
   caso(2)
      resultado <- (n1-n2)
      operador <- ("subtração")
   caso(3)
      resultado <- (n1*n2)
      operador <- ("multiplicação")
   caso(4)
      resultado <- (n1/n2)
      operador <- ("divisão")
   caso(5)
      resultado <- (n1^n2)
      operador <- ("potenciação")
   fimescolha
   escreval("")
   escreva("O resultado da ", operador , " entre ", n1 , " e ",n2, " é")
   escreva( resultado)

Fimalgoritmo