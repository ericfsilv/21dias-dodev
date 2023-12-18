//Numeros em Comum - Function + Array

let arrayA = [10,13,15,16,18,20,24,12,30,23];
let arrayB = [12,11,13,24,30,34,22,17,19,21];

function AcharNumerosEmComum(arrayUm, arrayDois){
    let resultado = []; //Declarando array de numeros comum
    let contadorResultado = 0; //Contador desse array

    //O primeiro FOR percorre o arrayUm
    for (let i = 0; i < arrayUm.length; i++) {
        //O segundo FOR percorre o arrayDois
        //Compara com todos os numeros de arrayDois
        for (let j = 0; j < arrayDois.length; j++) {
            //Se a comparação for bem sucedida ele adiciona esse numero no array de
            //numeros em comum e atribui o valor maximo ao contador j assim encerrando
            //a verificação para esse numero e evitando numeros duplicados
            if(arrayUm[j] == arrayDois[j]) {
                resultado[contadorResultado] = arrayUm[i]
                contadorResultado++
                j = arrayDois.length
            }
        }
    }

    return resultado
}

console.log(AcharNumerosEmComum(arrayA, arrayB))