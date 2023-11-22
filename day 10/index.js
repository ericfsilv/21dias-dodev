// day 10 ARRAY_LENGTH
const array = [];
const indice = [];
let contadorIndice = 0;

const numeroProcurado = parseInt(prompt("Digite o número a ser procurado: "));

for (let i = 0; i < 10; i++) {
    const elemento = parseInt(prompt(`Digite o elemento: ${i + 1}`));
    array[i] = elemento;
}

for (let i = 0; i < 10; i++) {
    if(array[i] === numeroProcurado) {
        indice[contadorIndice] = i
        contadorIndice++
    }
}

console.log(`O numero ${numeroProcurado} foi encontrado nos indices: ${indice}`);
////////////////////////////////////////////////////////////////////////////////////////////
// EXERCICIO 2 
const arrays = [];
const arrayInvertido = []; 
 
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + " numero"))
    array[i] = numero
}

console.log("Array original: " + array)

let contador = 4
for(let i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido" + arrayInvertido)