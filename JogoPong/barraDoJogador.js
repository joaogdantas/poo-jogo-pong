import * as THREE from 'three';
import Barra from './barra.js';

export default class BarraDoJogador extends Barra {
    constructor(cena) {
        super(cena, -3.5);
        window.addEventListener('mousemove', (evento) => {
            const y = (evento.clientY / window.innerHeight) * 6 - 3;
            this.mesh.position.y = THREE.MathUtils.clamp(y, -3, 3);
        });
    }
}
