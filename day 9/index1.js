//Rh da DoDev -  Swtch case + If/else + Loop
let confirma = 'n';
while(confirma != 's') {
    let nome = prompt("Digite seu nome: ")
    let idade = Number(prompt("Digite sua idade: "))
    let salarioAtual = Number(prompt("Informe seu salario: "))

    console.log("Nome: " + nome + ", idade: " + idade + ", salario atual: " + salarioAtual)
    confirma = prompt("As informações estão corretas? (s/n)")
}

//Fazendo previsão do salario
let aumento = 0.015;
console.log("Previsão de aumento de salario dos proximos 10 anos: ");

for (let ano = 1; ano <= 10; ano++) {
    let salarioAtual = Number(prompt("Informe seu salario: "))
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log(2023 + ano + " = R$ " + salarioAtual)
}