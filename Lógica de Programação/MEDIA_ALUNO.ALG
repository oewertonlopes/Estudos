Algoritmo "media_aluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 19/02/2022
Var
   // Seção de Declarações das variáveis
   n1,n2, media:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreval("----------------------------")
   escreval("Escola Aprendendo a aprender")
   escreval("----------------------------")
   escreval("")
   escreva("Primeira Nota: ")
   leia(n1)
   escreva("Segunda Nota: ")
   leia(n2)
   escreval("")
   media<-((n1+n2)/2)
   
   escreval("----------------------------")
   escreval("MEDIA: ",media)
   se(media >=9.0)entao
      escreval("APROVEITAMENTO: A")
   senao
      se(media >=8.0) entao
         escreval("APROVEITAMENTO: B")
      senao
         se (media >=7.0) entao
            escreval("APROVEITAMENTO: C")
         senao
            se (media >=6.0) entao
               escreval("APROVEITAMENTO: D")
            senao
               se (media >=5.0) entao
                  escreval("APROVEITAMENTO: E")
               senao
                  escreval("APROVEITAMENTO: F")
               fimse
            fimse
         fimse
      fimse
   fimse
    escreval("----------------------------")

Fimalgoritmo