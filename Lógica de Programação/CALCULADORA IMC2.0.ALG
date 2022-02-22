Algoritmo "calculadora imc2.0"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   p,a,imc:Real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("informe o peso(KG): ")
   leia(p)
   escreva("informe sua altura(M): ")
   leia(a)
   imc<-p/(a^2)
   escreval("Seu imc é: ", imc:5:2)

   se (imc <=17) entao
      escreval("Muito abaixo do peso")
   senao
      se (imc >17) e (imc <= 18.5) entao
         escreval("Abaixo do peso")
      senao
         se (imc >18.5)  e (imc <= 25) entao
            escreval("Peso ideal")
         senao
            se (imc >25)  e (imc <= 30) entao
               escreval("Sobrepeso")
            senao
               se (imc >30)  e (imc <= 35) entao
                  escreval("Obesidade grau 1 ")
               senao
                  se (imc >35)  e (imc <= 40) entao
                     escreval("Obesidade grau 2")
                  senao
                     escreval("Obesidade Morbida")
                  fimse
               fimse
            fimse
         fimse
      fimse
   fimse
Fimalgoritmo