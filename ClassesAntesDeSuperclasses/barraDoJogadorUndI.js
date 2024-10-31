import * as THREE from 'three';

class BarraDoJogadorUndI {
    constructor(scene) {
        const geometria = new THREE.BoxGeometry(0.2, 1, 0.2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(geometria, material);
        this.mesh.position.x = -3.5;
        scene.add(this.mesh);

        window.addEventListener('mousemove', (evento) => {
            const y = (evento.clientY / window.innerHeight) * 6 - 3;
            this.mesh.position.y = THREE.MathUtils.clamp(y, -3, 3);
        });
    }

    atualizar() {}
}

export default BarraDoJogadorUndI;
