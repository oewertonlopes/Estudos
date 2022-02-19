Algoritmo "Conversor_de_temperatura"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Seção de Declarações das variáveis 
    temCel, temFah: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
     escreval("Me informa a temperatura em Fahrenheit:")
     leia (temFah)
     temCel <- ((temFah - 32)*(5/9))
     escreval("A temperatura em graus é : ", temCel)
Fimalgoritmo