import * as THREE from 'three';

export default class Barra {
    constructor(cena, posicaoX) {
        const geometria = new THREE.BoxGeometry(0.2, 1, 0.2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(geometria, material);
        this.mesh.position.x = posicaoX;
        cena.add(this.mesh);
    }

    atualizar() {}
}
