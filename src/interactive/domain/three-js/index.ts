import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';

export class GameCore {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  container: HTMLElement | null = null;

  cube: THREE.Mesh;

  raycaster: THREE.Raycaster;
  pointer: THREE.Vector2;
  isClick: boolean;

  score = 0;
  constructor() {
    console.log('New GameCore');
    this.scene = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(100, 100);

    this.camera = new THREE.PerspectiveCamera(75, 100 / 100, 0.01, 1000);
    this.camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    // Check Click
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
    this.isClick = false;

    this.renderer.render(this.scene, this.camera);
    window.addEventListener('resize', this.onWindowResize, false);
    this.renderer.setAnimationLoop(null);

    // this.animate();
  }
  callbackSetScore: (score: number) => void = () => {};
  setCallbackSetScore = (callbackSetScore: (score: number) => void) => {
    this.callbackSetScore = callbackSetScore;
    this.callbackSetScore(this.score);
  };

  animate = () => {
    // requestAnimationFrame(this.animate);

    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;

    // =============== raycaster =====================
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children);
    let color = 0x00ff00;
    for (let i = 0; i < intersects.length; i++) {
      //   console.log('intersects ', intersects[i]);
      color = 0xff0000;
      if (this.isClick) {
        this.score += 1;
        this.callbackSetScore(this.score);
        // textScore.innerHTML = 'Score : ' + score;
        this.cube.position.set(
          Math.random() * 4 - 2,
          Math.random() * 4 - 2,
          Math.random() * 4 - 2,
        );
      }
    }
    this.isClick = false;
    // ====================================
    (this.cube.material as MeshBasicMaterial).color.set(new THREE.Color(color));

    // console.log('Update');
    this.renderer.render(this.scene, this.camera);
  };

  onPointerMove = (event: any) => {
    // calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components

    if (!this.container) {
      return;
    }

    const rect = this.container.getBoundingClientRect();
    // console.log(
    //   'SSS',
    //   this.container.clientLeft,
    //   ' = ',
    //   event.clientX - rect.left,
    //   ' / ',
    //   this.container.clientWidth,
    //   ' : ',
    //   event.clientY - rect.top,
    //   ' / ',
    //   this.container.clientHeight,
    // );

    this.pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  };

  onPointerClick = (event: any) => {
    this.isClick = true;
  };

  onWindowResize = () => {
    // console.log('Resize !!!!', this.container);

    if (!this.container) {
      return;
    }
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    // console.log(this.container, 'clientWidth / clientHeight ', width, height);

    this.renderer.setPixelRatio(1 / window.devicePixelRatio);
    // console.log('WW ', width * window.devicePixelRatio, height * window.devicePixelRatio);
    // this.renderer.domElement.width = width;
    // this.renderer.domElement.height = height;

    this.renderer.setSize(
      width, // width * window.devicePixelRatio,
      height, // height * window.devicePixelRatio,
      true,
    );

    // handle ratina
    this.renderer.setSize(
      width * window.devicePixelRatio,
      height * window.devicePixelRatio,
      false,
    );

    // this.renderer.domElement.width = width;
    // this.renderer.domElement.height = height;

    // this.renderer.setSize(
    //   width * window.devicePixelRatio,
    //   height * window.devicePixelRatio,
    //   false
    // );
    // this.renderer.setSize(width, height, true);

    if (this.camera instanceof THREE.PerspectiveCamera) {
      this.camera.aspect = width / height;
    }

    this.camera.updateProjectionMatrix();
    this.renderer.render(this.scene, this.camera);

    this.container.appendChild(this.renderer.domElement);
  };

  mount = (mountDiv: HTMLDivElement | null) => {
    this.container = mountDiv;
    if (!this.container) {
      return;
    }

    this.container.appendChild(this.renderer.domElement);

    this.container.addEventListener('pointermove', this.onPointerMove);
    this.container.addEventListener('click', this.onPointerClick);
    // console.log('mount D : ', this.container);
    this.onWindowResize();

    this.renderer.setAnimationLoop(this.animate);

    // this.renderer.render(this.scene, this.camera);
  };

  unmount = () => {
    this.container?.removeChild(this.renderer.domElement);
    // console.log('unmount D : ', this.container);
    this.container?.removeEventListener('pointermove', this.onPointerMove);
    this.container?.removeEventListener('click', this.onPointerClick);
    this.container = null;
    this.renderer.setAnimationLoop(null);
  };
}
