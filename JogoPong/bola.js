import * as THREE from 'three';

export default class Bola {
    constructor(cena) {
        const geometria = new THREE.SphereGeometry(0.1, 32, 32);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        this.mesh = new THREE.Mesh(geometria, material);
        cena.add(this.mesh);

        this.velocidade = new THREE.Vector3(0.05, 0.05, 0);
    }

    atualizar(barraDoJogador, barraAutomatica, placarDoJogador, placarDoAdversario) {
        this.mesh.position.add(this.velocidade);

        if (this.mesh.position.y > 3 || this.mesh.position.y < -3) {
            this.velocidade.y = -this.velocidade.y;
        }

        if (this.mesh.position.distanceTo(barraDoJogador.mesh.position) < 0.6 && this.velocidade.x < 0) {
            this.velocidade.x = -this.velocidade.x;
        } else if (this.mesh.position.distanceTo(barraAutomatica.mesh.position) < 0.6 && this.velocidade.x > 0) {
            this.velocidade.x = -this.velocidade.x;
        }

        if (this.mesh.position.x > 3.5) {
            placarDoJogador.incrementarPontuacao();
            this.reiniciar();
        } else if (this.mesh.position.x < -3.5) {
            placarDoAdversario.incrementarPontuacao();
            this.reiniciar();
        }
    }

    reiniciar() {
        const x = (Math.random() - 0.5) * 6;
        const y = (Math.random() - 0.5) * 6;
    
        this.mesh.position.set(x, y, 0);
    
        this.velocidade.x = -Math.abs(this.velocidade.x);
        this.velocidade.y = (Math.random() > 0.5 ? 1 : -1) * Math.abs(this.velocidade.y);
    }    
}
