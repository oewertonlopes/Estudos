Algoritmo "Conversor_de_temperatura"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Se��o de Declara��es das vari�veis 
    temCel, temFah: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
     escreval("Me informa a temperatura em Fahrenheit:")
     leia (temFah)
     temCel <- ((temFah - 32)*(5/9))
     escreval("A temperatura em graus � : ", temCel)
Fimalgoritmo