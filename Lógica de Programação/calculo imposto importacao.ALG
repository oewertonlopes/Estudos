Algoritmo "Calculo_imposto_importacao"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Se��o de Declara��es das vari�veis 
   import, impost : real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
     escreval("Me informa o valor dos bens importados: ")
     leia (import)
     impost<- ((import*60)/100)
     escreval("O valor da multa foi de R$: ", impost:5:2)

Fimalgoritmo