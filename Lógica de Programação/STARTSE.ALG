Algoritmo "Ewerton Lopes"

Var
   resp,nome,melhor,melhorA,melhorB,melhorC,melhorD:caracter
   turma,qtdA,qtdB,qtdC,qtdD,qtdaprovados:inteiro
   notaA,notaB, notaC,notaD,maior,melhorNA,melhorNB,melhorNC,melhorND:real
Inicio
   //Valores para validação do código.
   //opção: 1 nome: q nota: 7
   //opção: 1 nome: w nota: 7.1
   //opção: 1 nome: e nota: 9
   //opção: 2 nome: r nota: 8
   //opção: 2 nome: t nota: 6
   //opção: 3 nome: y nota: 8.5
   //opção: 4 nome: u nota: 7,8


   escreval("---------------------------------")
   escreval("        COLÉGIO ESPERANÇA        ")
   escreval("---------------------------------")

   resp <- "s"
   enquanto (resp = "s") faca
      escreval("Digite [1] para TURMA A")
      escreval("Digite [2] para TURMA B")
      escreval("Digite [3] para TURMA C")
      escreval("Digite [4] para TURMA D")
      leia(turma)
      limpatela


      escolha(turma)
         qtdA<-0
         qtdB<-0
         qtdC<-0
         qtdD<-0
      caso(1)
         escreva("INFORME SEU NOME: ")
         leia(nome)
         escreva("INFORME SUA NOTA ", nome, ": ")
         leia(notaA)
         se (notaA>=7) entao
            qtdA <- qtdA + 1
         fimse

         se (notaA > melhorNA) entao
            melhorA <- nome
            melhorNA <- notaA
         fimse

      caso(2)
         escreva("INFORME SEU NOME: ")
         leia(nome)
         escreva("INFORME SUA NOTA ", nome, ": ")
         leia(notaB)
         se (notaB>=7) entao
            qtdB <- qtdB + 1
         fimse

         se (notaB > melhorNB) entao
            melhorB <- nome
            melhorNB <- notaB
         fimse

      caso(3)
         escreva("INFORME SEU NOME: ")
         leia(nome)
         escreva("INFORME SUA NOTA ", nome, ": ")
         leia(notaC)
         se (notaC>=7) entao
            qtdC <- qtdC + 1
         fimse

         se (notaC > melhorNC) entao
            melhorC <- nome
            melhorNC <- notaC
         fimse

      caso(4)
         escreva("INFORME SEU NOME: ")
         leia(nome)
         escreva("INFORME SUA NOTA ", nome, ": ")
         leia(notaD)
         se (notaD>=7) entao
            qtdD <- qtdD + 1
         fimse

         se (notaD > melhorND) entao
            melhorD <- nome
            melhorND <- notaD
         fimse
      fimescolha

      escreva ("VOCê QUER INFORMAR OUTRA NOTA? RESPONDA [s/n]")
      leia(resp)
      limpatela
      qtdAprovados <-0
      qtdaprovados <- qtdA + qtdB + qtdC + qtdD

      se (melhorNA>=melhorNB) e (melhorNA>=melhorNC) e (melhorNA>=melhorND) entao
         maior<-melhorNA
         melhor <-melhorA
      senao
         se (melhorNB>=melhorNA) e (melhorNB>=melhorNC)e (melhorNB>=melhorND) entao
            maior<-melhorNB
            melhor<-melhorB
         senao

            se (melhorNC>=melhorNA) e (melhorNC>=melhorNB)e (melhorNC>=melhorND) entao
               maior<-melhorNC
               melhor<-melhorC
            senao

               se (melhorND>=melhorNA) e (melhorND>=melhorNB) e (melhorND>=melhorNC) entao
                  maior<-melhorND
                  melhor<-melhorD
               fimse
            fimse
         fimse
      fimse

   fimenquanto
   escreval("A quantidade total de aprovados no Colégio foi de", qtdaprovados," alunos.")
   escreval("A quantidade de aprovados na turma A foi de:", qtdA," pessoa(s)")
   escreval("A maior nota da turma A foi",melhorNA, " de ", melhorA,".")
   escreval("A quantidade de aprovados na turma B foi de:", qtdB," pessoa(s)")
   escreval("A maior nota da turma B foi",melhorNB, " de ", melhorB,".")
   escreval("A quantidade de aprovados na turma C foi de:", qtdC," pessoa(s)")
   escreval("A maior nota da turma C foi",melhorNC, " de ", melhorC,".")
   escreval("A quantidade de aprovados na turma D foi de:", qtdD," pessoa(s)")
   escreval("A maior nota da turma D foi",melhorND, " de ", melhorD,".")
   escreval("A maior nota do COLÉGIO foi",maior, " de ", melhor,".")
Fimalgoritmo