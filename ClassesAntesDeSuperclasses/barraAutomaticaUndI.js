import * as THREE from 'three';

class BarraAutomaticaUndI {
    constructor(scene) {
        const geometria = new THREE.BoxGeometry(0.2, 1, 0.2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(geometria, material);
        this.mesh.position.x = 3.5;
        scene.add(this.mesh);
    }

    atualizar(posicaoBola) {
        if (posicaoBola) {
            this.mesh.position.y += (posicaoBola.y - this.mesh.position.y) * 0.05;
            this.mesh.position.y = THREE.MathUtils.clamp(this.mesh.position.y, -3, 3);
        }
    }
}

export default BarraAutomaticaUndI;
