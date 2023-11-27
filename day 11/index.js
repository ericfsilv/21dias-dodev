//ARRAY + DOWHILE
//ex1 = Avaliação da Turma 
let alunos = [];
let notas = []; 
let continuar = true;
let contador = 0;

while (continuar) {
    let aluno = prompt("Insira o nome do " + (contador + 1) + " aluno");
    let nota = prompt("Insira a nota do aluno: ")

    alunos[contador] = aluno;
    notas[contador] = nota;
    contador++;

    let resposta = prompt("Deseja inserir informações sobre outro aluno? (S or N) ")
    if (resposta == "N") 
        continuar = false;
}

console.log("Notas dos Alunos: ")
for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] - notas[i]);
}

let somaDasNotas
for(let i = 0; i < notas.length; i) {
    somaDasNotas += notas[i]
}
let media = somaDasNotas / alunos.length
console.log("A soma das notas foi: " + somaDasNotas);
console.log("A media geral foi: " + media);
//ARRAY + DOWHILE
//ex1 = Avaliação da Turma 
let alunos = [];
let notas = []; 
let continuar = true;
let contador = 0;

while (continuar) {
    let aluno = prompt("Insira o nome do " + (contador + 1) + " aluno");
    let nota = prompt("Insira a nota do aluno: ")

    alunos[contador] = aluno;
    notas[contador] = nota;
    contador++;

    let resposta = prompt("Deseja inserir informações sobre outro aluno? (S or N) ")
    if (resposta == "N") 
        continuar = false;
}

console.log("Notas dos Alunos: ")
for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] - notas[i]);
}

let somaDasNotas
for(let i = 0; i < notas.length; i) {
    somaDasNotas += notas[i]
}
let media = somaDasNotas / alunos.length
console.log("A soma das notas foi: " + somaDasNotas);
console.log("A media geral foi: " + media);