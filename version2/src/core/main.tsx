import './css/index.css';

import ReactDOM from 'react-dom/client';
import { EngineThree, IEngineThreeGameLoop } from 'skillvir-game-core/engine/three';
import * as THREE from 'three';

import Main from '../frontend/global';
import StoreGame from '../frontend/global/store/game/index.ts';
import { FixbugInit } from './fixbug/index.ts';
import { HelperStrictMode } from './helper/strict-mode.tsx';
import { MiddlewareInit } from './middleware/index.ts';

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

const gameLoop: IEngineThreeGameLoop = ({
  // context,
  deltaTime,
  timeStamp,
}) => {
  cube.rotation.x += (90 / 180) * Math.PI * deltaTime;
  cube.rotation.y += (90 / 180) * Math.PI * deltaTime;
  // context.renderer.render(context.scene, context.camera.main);
  console.log('gameLoop', deltaTime, timeStamp);
};

const engineThree = new EngineThree({ gameLoop });
engineThree.context.scene.add(cube);
engineThree.context.camera.main.position.z = 5;
// engineThree.context.scene.background = new THREE.Color(0x00bb00);
StoreGame.GetMethod().setEngineThree(engineThree);

FixbugInit();
MiddlewareInit();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelperStrictMode>
    <Main.JSX />
  </HelperStrictMode>,
);
