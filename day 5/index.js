//Switch Case
let idade = Number(prompt("Insira um numero de acordo com sua idade: \n1 - >10 \n2 - >15 \n3 - >20 \n4 - >25 \n5 - >30"))

switch (idade) {
    case 1:
        console.log("Voce ainda é criança!")
        break;
    case 2:
        console.log("Voce é adolescente!")
        break;
    case 3:
        console.log("Voce é maior de idade!")
        break;
    case 4:
        console.log("Voce tá ficando velho!")
        break;
    case 5:
        console.log("Voce já é velho!")
        break;
    default:
        console.log("error")
        break;
}
//Criando variveis
//let valor
//let quantidade
//let opcao = prompt("Bem vindo ao DoDev-Thru, voce deseja: " + "\n1 - abastecer com gasolina; \n2 - abastecer com alcool; \n3 - calibrar os pneus")

//Criando SwitchCase
//switch (opcao) {
    //case "1":
        //valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        //quantidade = valor / 5
        //console.log("Foram abastecidos: " + quantidade + "L de gasolina")
        //break;
    //case "2":
        //valor = parseInt(prompt("Digite o valor desejado para abastecer"))
        //quantidade = valor / 3
        //console.log("Foram abastecidos: " + quantidade + "L de alcool")
        //break;
    //default:
        //console.log("Pneus calibrados com sucesso")
       // break;        
//}//