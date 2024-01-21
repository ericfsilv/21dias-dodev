// BIBLIOTECA DA DODEV
class Livro {
    Titulo
    Autor
    Editora
    AnoDePublicacao
    Disponibilidade = true
    constructor(titulo, autor, editora, anoDePublicacao) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Editora = editora;
        this.AnoDePublicacao = anoDePublicacao;
    }
}

let livros = []
livros.push(new Livro("livro1", "Henrique", "editora A", 2001))
livros.push(new Livro("livro2", "Henrique", "editora F", 1997));
livros.push(new Livro("livro3", "Carlos", "editora F", 1997));
livros.push(new Livro("livro4", "João", "editora A", 2005))
livros.push(new Livro("livro5", "Fábio", "editora C", 2020))

class Biblioteca {
    Nome
    Endereco
    Telefone
    ArcevoLivros = []
    constructor(nome, endereco, telefone, arcevo) {
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.ArcevoLivros = arcevoLivros
    }

    BuscarLivroPeloTitulo(titulo) {
        this.ArcevoLivros.forEach(livro => {
            if(livro.Titulo == titulo) {
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo) {
        let emprestado = false
        this.ArcevoLivros.forEach(livro => {
            if (livro.Titulo == titulo) {
                if (livro.Disponibilidade == true) {
                    livro.Disponibilidade = false
                    emprestado = true
                }
            }
        })
        if (emprestado) {
            return true
        } else {
            return false
        }
    }

    DesenvolverLivro(titulo) {
        livros.forEach(livro => {
            if (livro.Titulo == titulo) {
                livro.Disponibilidade = true
                console.log("Livro devolvido")
            }
        })
    }
}

let biblioteca = new Bibilioteca("Bibilioteca DoDev", "2530", "Rua São João")

biblioteca.BuscarLivroPeloTitulo("livro2")
biblioteca.EmprestarLivro("livro1")
biblioteca.DesenvolverLivro("livro1")