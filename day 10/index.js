let array = [];
let indicesEncontrado = [];

for (let i = 0; i < 10; i++) {
    let numero = parseInt("Digite o " + (i + 1) + " número")
    array[i] = numero
}

let numeroProcurado = parseInt(prompt("Digite o numero que deseja procurar no array"))
let contador = 0

for (let i = 0; i < array.length; i++) {
    if (array[i] == numeroProcurado) {
        indicesEncontrado[contador] = i
        contador++
    } 
}

console.log("O numero inserido aparece nos indices " + indicesEncontrado)