//DoWhile
let condicao = true;

while(condicao === true) {
    let idade = Number(prompt("Informe sua idade"));
    if(idade >= 18) {
        console.log("Você é maior de idade!")

        condicao = false
    }
}

console.log("Terminou o while")