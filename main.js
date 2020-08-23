import * as THREE from './node_modules/three/src/Three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();

const materialgrey = new THREE.MeshBasicMaterial({ color: 0x262626, reflectivity: 9.0, exposure: 5.0,});
const materialwhite = new THREE.MeshBasicMaterial({ color: 0xf5f5f5 });
const materialred = new THREE.MeshBasicMaterial({ color: 0xcf0000 });


const cube1 = new THREE.Mesh(geometry, materialgrey);
const cube2 = new THREE.Mesh(geometry, materialwhite);
const cube3 = new THREE.Mesh(geometry, materialred);
cube1.position.x = -5;
cube2.position.x = 0;
cube3.position.x = 5;
scene.add(cube1);
scene.add(cube2);
scene.add(cube3);

camera.position.x = 0;
camera.position.y = 1;
camera.position.z = 8;


function animate() {
  requestAnimationFrame(animate);
  cube1.rotation.x += 0.02;
  cube1.rotation.y += 0.02;
  cube2.rotation.x += 0.03;
  cube2.rotation.y += 0.03;
  cube3.rotation.x += 0.04;
  cube3.rotation.y += 0.04;
  renderer.render(scene, camera);
}
animate();
