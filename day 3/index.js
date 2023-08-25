//Declaração de variaveis
let nome = ""
let idade = 0
let altura = 0
let peso = 0

//Solicitando informação ao usuario e atribuindo valore as variaveis
nome = prompt("Digite seu nome");
idade = parseInt(prompt("Digite sua idade"));
altura = parseFloat(prompt("Insira sua altura"));
peso = parseInt(prompt("Insira seu peso"));

//Calculando o ano que a pessoa nasceu e o IMC
let anoNasc = 0
anoNasc = 2023 - idade

let imc = 0
imc = peso / (altura * altura)

//Exibindo a informação no console
console.log("Olá" + nome + ", voce tem" + idade + " anos, nasceu em" + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é" + imc + "kg/m")
