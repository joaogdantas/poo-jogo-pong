import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import BarraDoJogador from './barraDoJogador.js';
import BarraAutomatica from './barraAutomatica.js';
import Bola from './bola.js';
import PlacarDoJogador from './placarDoJogador.js';
import PlacarDoAdversario from './placarDoAdversario.js';

export default class Pong {
    constructor() {
        this.cena = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderizador = new THREE.WebGLRenderer();
        this.renderizador.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderizador.domElement);

        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(window.innerWidth, window.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0px';
        document.body.appendChild(this.labelRenderer.domElement);

        this.barraDoJogador = new BarraDoJogador(this.cena);
        this.barraAutomatica = new BarraAutomatica(this.cena);
        this.bola = new Bola(this.cena);
        this.placarDoJogador = new PlacarDoJogador(this.cena);
        this.placarDoAdversario = new PlacarDoAdversario(this.cena);

        this.camera.position.z = 5;
        this.animar = this.animar.bind(this);
    }

    animar() {
        requestAnimationFrame(this.animar);
        this.barraDoJogador.atualizar();
        this.barraAutomatica.atualizar(this.bola.mesh.position);
        this.bola.atualizar(this.barraDoJogador, this.barraAutomatica, this.placarDoJogador, this.placarDoAdversario);
        this.renderizador.render(this.cena, this.camera);
        this.labelRenderer.render(this.cena, this.camera);
    }

    iniciar() {
        this.animar();
    }
}
