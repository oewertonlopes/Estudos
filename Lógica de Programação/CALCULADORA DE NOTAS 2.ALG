Algoritmo "Calculadora de notas 2"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Se��o de Declara��es das vari�veis
   n1,n2,media:Real

Inicio
   // Se��o de Comandos, procedimento, fun��es, operadores, etc...

   escreval("Informe a primeira nota")
   leia(n1)
   escreval("Informe a segunda nota")
   leia(n2)
   media<-(n1+n2)/2
   escreval ("A media do aluno foi: ",media)
   se (media>=7) entao
      escreval("aluno aprovado")
   senao
      se (media >=5) e (media<7) entao
         escreval("aluno em recupera��o")
      senao
         escreval("aluno reprovado")
      fimse
   fimse
Fimalgoritmo