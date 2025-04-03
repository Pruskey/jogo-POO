const canvas = document.getElementById('JogoCanvas')
const ctx = canvas.getContext('2d')

class Entidade {
    constructor(x, y, largura, altura, cor){
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }
    desenhar() {
        ctx.fillStyle = this.cor
        ctx.fillRect(this.x, this.y, this.altura, this.largura)
    }
}

class Jogo { 
    cosntructor() {
        this.loop = new this.loop.build()
    }
    loop () {
        console.log('Em andamento...')
        requestAnimationFrame(this.loop)
    }
}
const obstaculo = new Entidade(100, 100, 50, 50, 'white')
const jogo = new Jogo()
jogo.loop(obstaculo)
