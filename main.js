import * as THREE from 'three';
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import Pong from './JogoPong/pong.js';

const jogo = new Pong();
jogo.iniciar();
