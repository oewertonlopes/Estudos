Algoritmo "Calculo_IMC"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   peso, altura, imc: real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Informe o seu peso atual")
   leia (peso)
   escreval("Informe a sua altura em metros")
   leia (altura)
   imc<- peso/(altura^2)
   se ((imc >= 18.5) e (imc < 24.9)) entao
      escreval ("Seu IMC est� na faixa ideal")
   senao
      escreval ("Seu IMC atual �: ", IMC:5:2)
      escreval ("Cuide de sua sa�de, seu IMC est� fora da faixa ideal.")
   fimse

Fimalgoritmo