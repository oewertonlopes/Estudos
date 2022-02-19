Algoritmo "Calculo_imposto_importacao"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Seção de Declarações das variáveis 
   import, impost : real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreval("Me informa o valor dos bens importados: ")
     leia (import)
     impost<- ((import*60)/100)
     escreval("O valor da multa foi de R$: ", impost:5:2)

Fimalgoritmo