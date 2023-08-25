//Criando variaveis
let fome = false
let dinheiro = false
let restauranteAberto = false

//Pedindo Informações ao Usuario
let opcaoFome = prompt("Voce está com fome? (s/n)")
if(opcaoFome == "s") {
    fome =  true
}
let opcaoDinheiro = prompt("Voce tem dinheiro? (s/n)")
if(opcaoDinheiro == "s") {
    dinheiro = true
}
let opcaoRestaurante = prompt("O restaurante está aberto? (s/n)")
if(opcaoRestaurante == "s") {
    restauranteAberto = true
}

//Exibindo Mensagem no console
if(!fome || !dinheiro) {
    console.log("Hoje a janta será em casa")
} else if(fome && dinheiro && !restauranteAberto) {
    console.log("Peça um delivery!")
} else {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}