Algoritmo "semnome"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Se��o de Declara��es das vari�veis
   valor,numero,soma,maior, menor:inteiro

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   numero <- 1
   soma <- 0
   enquanto (numero <= 5)faca
      escreva("Informe o",numero, "� n�mero: ")
      leia(valor)
      se (valor > maior) entao
         maior <- valor
      fimse
      se (menor > valor) ou (menor = 0) entao
         menor <- valor
      fimse
      soma <- soma+valor
      numero <- numero + 1
   fimenquanto

   escreval("a soma entre os numeros digitados �" ,soma, " o maior valor digitado �:", maior, " o menor valor digitado �" ,menor)

Fimalgoritmo