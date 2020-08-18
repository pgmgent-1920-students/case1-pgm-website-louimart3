import * as THREE from 'three/build/three.module';

class ThreePage {
  constructor () {
    this.initThree();
  }
  
  async render () {
    return `
      <div class="page page--three">
        <h1>Three<h1>
        <div class="three-container"></div>
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    const container = document.querySelector('.page--three .three-container');
    await container.appendChild(this.renderer.domElement);

    this.animate();
    
    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }

  initThree () {
    this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    this.camera.position.z = 1;
    this.scene = new THREE.Scene();

    this.geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    this.material = new THREE.MeshNormalMaterial();

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate = () => {
    window.requestAnimationFrame(this.animate);

    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;

    this.renderer.render(this.scene, this.camera);
  }
}

export default ThreePage;
