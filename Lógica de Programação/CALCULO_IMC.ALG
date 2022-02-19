Algoritmo "Calculo_IMC"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   peso, altura, imc: real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("Informe o seu peso atual")
   leia (peso)
   escreval("Informe a sua altura em metros")
   leia (altura)
   imc<- peso/(altura^2)
   se ((imc >= 18.5) e (imc < 24.9)) entao
      escreval ("Seu IMC está na faixa ideal")
   senao
      escreval ("Seu IMC atual é: ", IMC:5:2)
      escreval ("Cuide de sua saúde, seu IMC está fora da faixa ideal.")
   fimse

Fimalgoritmo