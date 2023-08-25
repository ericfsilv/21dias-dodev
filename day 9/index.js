//Criando variaveis - Switch Case + Loop + IF/ELSE
let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let peso = prompt("Digite seu peso em kg")
let altura = prompt("Digite sua altura em metros")
let profissao = prompt("Digite sua profissão")

console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "m de altura e pesa " + peso + "kg.")

//Verificando Idade
if (idade >= 18) {
    console.log("Está liberado para tomar umas geladas")
} else {
    console.log("Sem gelada para você")
}

//Descobrindo idade fracionada
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log("Sua idade em meses é: " + meses)
console.log("Sua idade em semanas é: " + semanas)
console.log("Sua idade em dias é: " + dias)