//object and class
//exe1 - Meu Setup
class computador {
    Tipo;
    Processador;
    Video;
    Armazenamento;
    MemoriaRam;
    Ssd;

    constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, Ssd) {
        this.Tipo = Tipo;
        this.Processador = Processador;
        this.Video = Video;
        this.Armazenamento = Armazenamento;
        this.MemoriaRam = MemoriaRam;
        this.Ssd = Ssd;
    }

    ExibirInformacoes() {
        console.log("Informações do computador: ");
        console.log(`Tipo: ${this.Tipo}`);
        console.log(`Processador: ${this.Processador}`);
        console.log(`Video: ${this.Video}`);
        console.log(`Armazenamento: ${this.Armazenamento}`);
        console.log(`Memoria Ram: ${this.MemoriaRam}`);
        console.log(`Ssd: ${this.Ssd}`);
    }
}

//Exemplo de uso
const meuComputador = new computador("notebook", "ryxen 7", "Dedicado", 1000, 16, true);
meuComputador.ExibirInformacoes();