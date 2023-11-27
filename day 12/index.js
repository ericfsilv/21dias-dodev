// ARRAY + LOOP + SWITCH CASE //
// COMUNIDADE DODEV //
let nomes = [];
let senhas = [];
let contador = 0;

let continuar = true;

while (continuar) {

let opcao = prompt("Qual operação você deseja? 1 - Cadastro / 2 - login / 3 - excluir / 4 - encerrar")

switch (opcao) { //cadastro
    case "1":
        nomes[contador] = prompt("Digite o nome: ");
        senhas[contador] = prompt("Digite a senha: ");
        contador++;
        break;

    case "2": //login
        let nome = prompt("Digite seu nome: ");
        let senha = prompt("Digite sua senha: ");

        for(let i = 0; i < nomes.length; i++) {
            if(nome == nomes[i] && senha == senhas[i]) {
                let loginValido = True;
            }
        }
        if(loginValido) {
            alert("Login realizado com sucesso!");
        } else {
            alert("Login ou senha incorretos")
        }
        break;
    

    case "3"://exclusão
        let excluirNome = prompt("Qual nome deseja excluir? ")
        let nomesAux = [];
        let senhasAux = [];
        let contadorAux = 0;

        for(let i = 0; i < contador; i++) {
            if(excluirNome == nomes[i]) {
                alert("Cadastro excluido com sucesso!");
            } else{
                nomesAux[contadorAux] = nomes[i];
                senhasAux[contadorAux] = senhas[i];
                contadorAux++;
            }
        }

        nomes = nomesAux;
        senhas = senhasAux;
        contador--
        break;
    
    case "4"://encerrar
        continuar = false;
        break;
        
    default:
        console.log("Opção Invalida! Tente Novamente.")
        break;         


        
        

}
}
