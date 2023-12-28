//Arrays para armazenar nomes e senhas
let nomes = [];
let senhas = [];

//Função para solicitar a opção ao usuario
function solicitarOpcao () {
    let opcao = prompt("Escolha uma opção:\n1. Cadastrar \n2. Login " + "\n3. Excluir cadastro \n4. Encerrar programa");
    return opcao;
}

//Função para solicitar nome e senha do usuario
function cadastrarUsuario() {
    nomes.push(prompt("Digite seu nome: "))
    senhas.push(prompt("Digite sua senha: "))
}

//Função para fazer login
function fazerLogin () {
    let indice = nomes.indexOf(nome);
    if (indice !== -1 && senhas[indice] == senha) {
        return true;
    } else {
        return false;
    }
}

//Função para excluir cadastro
function excluirCadastro() {
    let indice = nomes.indexOf(nome);
    if (indice !== -1) {
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluído com sucesso!");
    }
}

//fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
    let opcao = solcilitarOpcao();

    switch (opcao) {
        case '1':
            cadastrarUsuario();
            break;

        case '2':
            let Nome = prompt("Digite seu nome");
            let senha = prompt("Digite sua senha");
            let login = fazerLogin(Nome,senha);
            if (login) {
                console.log("Login efetuado com sucesso!")
            }else {
                console.log("Nome ou senha incorretos!")
            }
            break;

        case '3':
            let nome = prompt("Digite seu nome");
            excluirCadastro(nome);
            break;
            
        case '4':
            continuar = false;
            break;
        
        default:
            console.log("Opção invalida. Tente novamente")
            break;    
    }
}