import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

class PlacarUndI {
    constructor(scene) {
        this.pontuacaoJogador = 0;
        this.pontuacaoAdversario = 0;

        this.elementoPlacar = document.createElement('div');
        this.elementoPlacar.style.fontSize = '24px';
        this.elementoPlacar.style.color = 'white';
        this.atualizarExibicao();

        this.objetoPlacar = new CSS2DObject(this.elementoPlacar);
        this.objetoPlacar.position.set(0, 2.5, 0);
        scene.add(this.objetoPlacar);
    }

    incrementarPontuacaoJogador() {
        this.pontuacaoJogador++;
        this.atualizarExibicao();
    }

    incrementarPontuacaoAdversario() {
        this.pontuacaoAdversario++;
        this.atualizarExibicao();
    }

    atualizarExibicao() {
        this.elementoPlacar.innerHTML = `Jogador: ${this.pontuacaoJogador} - Adversário: ${this.pontuacaoAdversario}`;
    }
}

export default PlacarUndI;
