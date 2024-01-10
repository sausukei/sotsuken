import { THREE, scene, camera, renderer } from "https://code4fukui.github.io/egxr.js/egxr.js";

const geo = new THREE.BoxGeometry(0.5, 1, 1.5);
const wireframe = true;
const mat = new THREE.MeshBasicMaterial({ color: 0xff0088, wireframe });
const mesh = new THREE.Mesh(geo, mat);


const Sample = () => {
    scene.add(mesh);

    renderer.setAnimationLoop(() => {
        mesh.position.z = -2;
        mesh.rotation.y += .01;
        renderer.render(scene, camera);
    });
}

export default Sample;