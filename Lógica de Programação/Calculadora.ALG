Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 21/02/2022
Var
   // Se��o de Declara��es das vari�veis
   n1, n2, operacao, resultado:real
   operador:caracter

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreva("Informe primeiro n�mero: ")
   leia(n1)
   escreval("")
   escreval("Informe opera��o Matem�tica")
   escreval("[1]Soma")
   escreval("[2]Subtra��o")
   escreval("[3]Multiplica��o")
   escreval("[4]Divis�o")
   escreval("[5]Potencia��o")
   escreval("")
   leia(operacao)
   escreval("")
   escreva("Informe segundo n�mero: ")
   leia(n2)

   escolha (operacao)
   caso(1)
      resultado <- (n1+n2)
      operador <- ("soma")
   caso(2)
      resultado <- (n1-n2)
      operador <- ("subtra��o")
   caso(3)
      resultado <- (n1*n2)
      operador <- ("multiplica��o")
   caso(4)
      resultado <- (n1/n2)
      operador <- ("divis�o")
   caso(5)
      resultado <- (n1^n2)
      operador <- ("potencia��o")
   fimescolha
   escreval("")
   escreva("O resultado da ", operador , " entre ", n1 , " e ",n2, " �")
   escreva( resultado)

Fimalgoritmo