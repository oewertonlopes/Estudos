Algoritmo "Calculadora_Emprestimo"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Se��o de Declara��es das vari�veis 
     emprest, valor, total, parcela, divisao: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    escreval("Qual ser� o valor do empr�stimo?")
    leia(emprest)
    escreval("Em quantas parcelas?")
    leia(parcela)
    valor <- (emprest*20)/100)
    total <- (valor + emprest)
    divisao <- total/parcela
    escreval("Voc� pagar� ", valor:5:2, " reais a mais de juros e no total voc� pagar� ", total:5:2, " reais.")
    escreval ("Em ", parcela, " vezes, voc� pagar� ", parcela, " X ", divisao:5:2, " Reais")
Fimalgoritmo