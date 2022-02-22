Algoritmo "Calculadora de notas 2"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   n1,n2,media:Real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...

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
         escreval("aluno em recuperação")
      senao
         escreval("aluno reprovado")
      fimse
   fimse
Fimalgoritmo