//ex2 -  Concessionaria DoDev
let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

while (continuar) {
    let modelo = prompt("Digite o modelo do carro: ");
    modelos[contador] = modelo;
    let ano = prompt("Digite o ano do carro: ");
    anos[contador] = ano;
    let valor = prompt("Digite o valor do carro: ");
    valores[contador] = valor;
    contador++;

    let resposta = prompt("Deseja adicionar mais algum carro? (s/n)");
    if (resposta == "n") {
        continuar = false;
    }
}

console.log("Carros Cadastrados")
for(let i = 0; i < modelos.length; i++) {
    console.log(`Modelo: ${modelos[i]}, Ano: ${anos[i]}, Valor: ${valores[i]}`);
}

//part2 - Ordenando por preço

for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++) {
        if(valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] - modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] - anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let valorMaior = valores[j]
            valores[j] - valores[j + 1]
            valores[j + 1] = valorMaior
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for(let i = 0; i < modelos.length; i++) {
    console.log(`Modelo: ${modelos[i]}, Ano: ${anos[i]}, Valor: ${valores[i]}`);
}
//ex2 -  Concessionaria DoDev
let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 0;

while (continuar) {
    let modelo = prompt("Digite o modelo do carro: ");
    modelos[contador] = modelo;
    let ano = prompt("Digite o ano do carro: ");
    anos[contador] = ano;
    let valor = prompt("Digite o valor do carro: ");
    valores[contador] = valor;
    contador++;

    let resposta = prompt("Deseja adicionar mais algum carro? (s/n)");
    if (resposta == "n") {
        continuar = false;
    }
}

console.log("Carros Cadastrados")
for(let i = 0; i < modelos.length; i++) {
    console.log(`Modelo: ${modelos[i]}, Ano: ${anos[i]}, Valor: ${valores[i]}`);
}

//part2 - Ordenando por preço

for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++) {
        if(valores[j] > valores[j + 1]) {

            let modeloMaiorValor = modelos[j]
            modelos[j] - modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] - anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let valorMaior = valores[j]
            valores[j] - valores[j + 1]
            valores[j + 1] = valorMaior
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for(let i = 0; i < modelos.length; i++) {
    console.log(`Modelo: ${modelos[i]}, Ano: ${anos[i]}, Valor: ${valores[i]}`);
}