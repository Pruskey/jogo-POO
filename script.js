const canvas = document.getElementById('JogoCanvas');
const ctx = canvas.getContext('2d');

document.addEventListener('keypress', (e) => {
    if (e.code === 'Space') {
        personagem.saltar();
    }
});

class Entidade {
    constructor(x, y, largura, altura, cor) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }

    desenhar() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }
}

class Personagem extends Entidade {
    #velocidade_y
    #y
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor);
        this.velocidade_y = 0;
        this.pulando = false;
    }
    

    saltar() {
        this.velocidade_y = -15;
        this.pulando = true;
    }

    atualizar() {
        this.y += this.velocidade_y;
        if (this.pulando) {
            this.velocidade_y += 1;
            if (this.y >= canvas.height - this.altura) {
                this.y = canvas.height - this.altura;
                this.pulando = false;
                this.velocidade_y = 0;
            }
        }
    }

    colisao(parede){
        if(parede.x < this.x + this.largura && 
            parede.largura + parede.x > this.x &&
            this.y < parede.y + parede.altura &&
            this.y + this.altura > parede.y){
                this.x = parede.x - 45;

            }
    }

    loopGame(){
        if (personagem.x < -50) {
            gameOver == true
        }
    }
}

class Obstaculo extends Entidade {
    #velocidade_x
    constructor(x, y, largura, altura, cor) {
        super(x, y, largura, altura, cor);
        this.velocidade_x = -5;
    }

    desenhar() {
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    }

    setPosition(xP, yP) {
        this.xP = xP
        this.yP = yP

        this.x = xP
        this.y = yP
    }


    atualizar() {
        this.x += this.velocidade_x;
            if (this.x < -100){
                this.setPosition(800, 250)
            }
        }
    }

class Jogo {
    static gameOver = false
    constructor() {
        this.loop = this.loop.bind(this);
    }

    gravidade(){

    }

    loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        personagem.desenhar();
        personagem.colisao(teste);
        personagem.atualizar();
        teste.desenhar();
        teste.atualizar();
        requestAnimationFrame(this.loop);
    }
}

// Create entities
const teste = new Obstaculo(800, 250, 70, 400, "black");
const personagem = new Personagem(150, canvas.height - 45, 45, 45, 'blue');
const jogo = new Jogo();
jogo.loop();
