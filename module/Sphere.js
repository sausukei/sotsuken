import * as THREE from "three"


// const Sphere = (props,deg) => {
// //     const geo = new THREE.BoxGeometry(0.5, 1, 1.5);
// //     const wireframe = true;
// //     const mat = new THREE.MeshBasicMaterial({ color: 0xff0088, wireframe });
// //     const mesh = new THREE.Mesh(geo, mat);

//     const Sgeometry = new THREE.SphereGeometry(0.6, 32, 32);

//     // Create a material
//     const Smaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

//     // Create a sphere mesh
//     const sphere = new THREE.Mesh(Sgeometry, Smaterial);
//     sphere.position.x = -2;
//     sphere.position.z = -2;
//     sphere.rotation.y = deg;
//     props.add(sphere);
// }

const Sphere = class{
    constructor(){
        this.sphere = null;
    }
    
    createSphere(){
        let Sgeometry = new THREE.SphereGeometry(0.6, 32, 32);
        const Smaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
        this.sphere = new THREE.Mesh(Sgeometry, Smaterial);
        this.sphere.position.x = -2;
        this.sphere.position.z = -2;
        this.sphere.rotation.y = 0.5;
        return this.sphere;
    }

    changeSize(e){
        let Sgeometry = new THREE.SphereGeometry(e, 32, 32);
        this.sphere.geometry.dispose();
        this.sphere.geometry = Sgeometry;
    }

    
}

export default Sphere;
