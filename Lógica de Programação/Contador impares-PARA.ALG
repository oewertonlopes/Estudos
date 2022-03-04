Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 03/03/2022
Var
   // Seção de Declarações das variáveis
   contador, comeco, final :inteiro

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva ("Informe o início da contagem: ")
   leia(comeco)
   escreva ("Informe o final da contagem: ")
   leia (final)
   para contador <- comeco ate final passo 1 faca
      se (contador%2=1) entao
         escreval (contador)
      fimse
   fimpara

Fimalgoritmo