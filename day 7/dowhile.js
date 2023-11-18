//Do While - Caixa Eletronico - DoDEV
//variaveis 
let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false;

do {
    const nome = prompt("Digite seu nome: ");
    const cpf = prompt("Informe seu cpf: ");
    const valor = Number(prompt("Informe o valor da transação:  "));
    const operacao = prompt("Qual operação deseja? S/D");

    if(valor < 0) {
        console.log("Valor inválido")
    } else if(operacao == "S" && valor > saldo) {
        console.log("Saldo insuficiente. A Transação não foi realizada!")
    } else if(operacao == "S") {
        console.log(`Olá, ${nome} (${cpf}), seu saldo atual é R$${saldo}.`);
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é de R$${saldo}. `)
    } else {
        console.log(`Olá, ${nome} (${cpf}, seu saldo é R$${saldo}.)`);
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é de R$${saldo}. `)
    }

    const opcao = prompt("Deseja continuar? (1- continuar e 2- parar")
    if(opcao === "1") {
        continuar = true;
    } else if(opcao === "2") {
        continuar = false;
    } else {
        console.log("Opção inválida")
        continuar = false;
    }

} while (continuar)

console.log(`Saldo final R$${saldo}`);
console.log(`Maior valor inserido: R$${maiorValorInserido}`);
console.log(`Media dos valores inseridos: R$${somaValoresInseridos / totalTransacoes}`)
