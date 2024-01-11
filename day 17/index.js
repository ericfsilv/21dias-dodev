//Hotel Dodev
class Hotel {
    Id 
    Nome 
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.Id = id;
        this.Nome = nome;
        this.Categoria = categoria;
        this.Endereco = endereco;
        this.Telefone = telefone;
    }
}

class Reserva {
    Id
    IdHotel
    Responsavel
    DiaEntrada 
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida) {
        this.Id = id;
        this.IdHotel = idHotel;
        this.Responsavel = responsavel;
        this.DiaEntrada = diaEntrada;
        this.DiaSaida = diaSaida;
    }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

function CadastrarHotel() {
    let nome = prompt("Digite o nome do Hotel")
    let categoria = parseInt(prompt("Digite a categoria do hotel"))
    let endereco = prompt("Digite o endereco do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Digite o id do hotel"))
        for (let i = 0; i < hoteis.length; i++) {
            if(idHotel == hoteis[i].id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                console.log("Hotel não cadastrado")
            }
        }

    } while (!existe)

    let nome = prompt("Digite o nome do responsável")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Digite o dia de saída"))
        if(diaSaida < diaEntrada) {
            console.log("O dia de saída deve ser maior do que o dia de entrada")
        }
    } while (diaSaida < diaEntrada)

    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function ProcurarReservasPeloHotel (idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel - 1
            console.log("Hotel: ", hoteis[i].Nome)
            console.log("Responsavel: ", reserva.Responsavel)
            console.log("Dia de entrada: ", reserva.DiaEntrada)
            console.log("Dia de saida: ", reserva.DiaSaida)
        }
    })
}

function ProcurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].IdHotel
    console.log("Hotel: ", hoteis[idHotel - 1].Nome)
    console.log("Endereço: ", hoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada: ", hoteis[idHotel - 1].DiaEntrada)
    console.log("Dia de saida: ", hoteis[idHotel - 1].DiaSaida)
}

function ProcurarReservaPeloNome(nome) {
    for(let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].Responsavel) {
            console.log("Id da Reserva: " + reservas[i].Id)
            console.log("Hotel: " + hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
    }
}

function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; 1 < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número de telefone atualizado!")
}

