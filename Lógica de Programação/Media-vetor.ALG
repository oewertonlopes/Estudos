Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/03/2022
Var
   // Seção de Declarações das variáveis
   nome: vetor[1..4] de caractere
   nota1: vetor[1..4] de real
   nota2: vetor[1..4] de real
   media: vetor[1..4] de real
   aluno:caractere
   contador, totalAcima: inteiro
   somaMedia, mediaTurma: real
Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   para contador <- 1 ate 4 faca
      escreval("Aluno", contador)
      escreval("")
      escreva("Informe o nome do aluno: ")
      leia (nome[contador])
      escreva("Informe a primeira nota de ", nome[contador], ":")
      leia (nota1[contador])
      escreva("Informe a segunda nota de ", nome[contador], ":")
      leia (nota2[contador])
      media[contador] <- (nota1[contador]+nota2[contador])/2
      somaMedia <- somaMedia + media[contador]
   fimpara
   mediaTurma <- somaMedia/4
   limpatela

   escreval("Listgem de alunos:")
   escreval("--------------------------------")
   para contador <- 1 ate 4 faca
      escreval("A media de ", nome[contador]:15, " foi: ",media[contador]:4:1)
      se (media[contador] > mediaTurma) entao
         totalAcima <- totalAcima + 1
      fimse
   fimpara
   escreval("")
   escreval("Ao todo temos ",totalAcima, " alunos acima da média da turma que é:", mediaTurma:4:1)
Fimalgoritmo