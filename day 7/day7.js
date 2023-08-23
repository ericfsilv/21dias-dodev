//Criando Variaveis
let mediaGeral = 0;
let qtdHomens = 0;
let mulheresAcima7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

//nota, sexo
while (contador <= 10) {
    nota = parseInt(prompt("Digite a nota do " + contador + " aluno"));
    sexo = prompt("Digite o sexo do aluno: (m/f)");
    
    if(sexo == "m") {
        if(nota > maiorNotaHomens) {
            maiorNotaHomens = nota;
        }
        qtdHomens++
    }

    if(sexo == "f" && nota > 7) {
        mulheresAcima7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral/10

console.log("A media geral dos alunos foi: " + mediaGeral);
console.log("A quantidade de homens cadastrados foi: " + qtdHomens);
console.log("A quantidade de mulheres que tiveram nota maior que 7 foi: " + mulheresAcima7);
console.log("A maior nota entre os homens foi: " + maiorNotaHomens);

