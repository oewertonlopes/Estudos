Algoritmo "Calculadora_Emprestimo"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 17/02/2022
Var
// Seção de Declarações das variáveis 
     emprest, valor, total, parcela, divisao: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Qual será o valor do empréstimo?")
    leia(emprest)
    escreval("Em quantas parcelas?")
    leia(parcela)
    valor <- (emprest*20)/100)
    total <- (valor + emprest)
    divisao <- total/parcela
    escreval("Você pagará ", valor:5:2, " reais a mais de juros e no total você pagará ", total:5:2, " reais.")
    escreval ("Em ", parcela, " vezes, você pagará ", parcela, " X ", divisao:5:2, " Reais")
Fimalgoritmo