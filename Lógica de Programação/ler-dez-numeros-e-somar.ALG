Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 23/02/2022
Var
   // Seção de Declarações das variáveis
   valor,numero,soma,maior, menor:inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   numero <- 1
   soma <- 0
   enquanto (numero <= 5)faca
      escreva("Informe o",numero, "º número: ")
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

   escreval("a soma entre os numeros digitados é" ,soma, " o maior valor digitado é:", maior, " o menor valor digitado é" ,menor)

Fimalgoritmo