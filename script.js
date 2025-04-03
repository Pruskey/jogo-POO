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
    constructor(x, y, largura, altura, cor, imagemPath) {
        super(x, y, largura, altura, cor);
        this.velocidade_y = 0;
        this.pulando = false;
        this.imagem = new Image();
        this.imagem.src = imagemPath;
    }
    
    desenhar(){
        ctx.drawImage(
            this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura)
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
    constructor(x, y, largura, altura, cor, imagemPath) {
        super(x, y, largura, altura, cor);
        this.velocidade_x = -2;
        this.imagem = new Image();
        this.imagem.src = imagemPath;
    }

    desenhar() {
        ctx.drawImage(
            this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura
        );
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
                this.setPosition(2600, 275)
            }
        }
    }

    class Obstaculo_2 extends Entidade {
        constructor(x, y, largura, altura, cor, imagemPath) {
            super(x, y, largura, altura, cor);
            this.velocidade_x = -5;
            this.imagem = new Image();
            this.imagem.src = imagemPath;
        }
    
        desenhar() {
            ctx.drawImage(
                this.imagem,
                this.x,
                this.y,
                this.largura,
                this.altura
            );
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
                    this.setPosition(2600, 275)
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
        personagem.colisao(drogado);
        personagem.colisao(pedra);
        personagem.atualizar();
        drogado.desenhar();
        drogado.atualizar();
        pedra.desenhar();
        pedra.atualizar();
        requestAnimationFrame(this.loop);
    }
}

const drogado = new Obstaculo(2600, 275, 75, 125, "black", './Imagem/sprite_mago.png');
const pedra = new Obstaculo_2(1900, 275, 50, 75, "black", './Imagem/sprite_pedra.png');
const personagem = new Personagem(150, canvas.height - 45, 45, 45, 'blue','./Imagem/sprite1.png');
const jogo = new Jogo();
jogo.loop();
