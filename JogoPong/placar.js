import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

export default class Placar {
    constructor(cena, posicaoX) {
        this.pontuacao = 0;
        this.elementoPontuacao = document.createElement('div');
        this.elementoPontuacao.style.fontSize = '24px';
        this.elementoPontuacao.style.color = 'white';
        this.atualizarDisplay();

        this.objetoPontuacao = new CSS2DObject(this.elementoPontuacao);
        this.objetoPontuacao.position.set(posicaoX, 2.5, 0);
        cena.add(this.objetoPontuacao);
    }

    incrementarPontuacao() {
        this.pontuacao++;
        this.atualizarDisplay();
    }

    atualizarDisplay() {
        this.elementoPontuacao.innerHTML = `Placar: ${this.pontuacao}`;
    }
}
