import * as THREE from 'three';
import Barra from './barra.js';

export default class BarraAutomatica extends Barra {
    constructor(cena) {
        super(cena, 3.5);
    }

    atualizar(posicaoBola) {
        if (posicaoBola) {
            this.mesh.position.y += (posicaoBola.y - this.mesh.position.y) * 0.05;
            this.mesh.position.y = THREE.MathUtils.clamp(this.mesh.position.y, -3, 3);
        }
    }
}
