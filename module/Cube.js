// Import the necessary Three.js modules

import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create a material
const material = new THREE.MeshBasicMaterial({ color: 0xffa500 });

// Create a cube mesh
const cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

// Create a sphere geometry
const Sgeometry = new THREE.SphereGeometry(0.6, 32, 32);

// Create a material
const Smaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Create a sphere mesh
const sphere = new THREE.Mesh(Sgeometry, Smaterial);

// Add the sphere to the scene
scene.add(sphere);



// Render the scene
const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += Math.sin(0.01);
    cube.rotation.y += 0.01;

    sphere.position.x = 3;
    sphere.position.y = 0.5;

    renderer.render(scene, camera);
   
}

const Cube = () => {
    animate();
}

export default Cube;