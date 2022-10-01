import * as THREE from 'three';
// import ima from '../../images/l'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 8, 32, 32 );
const loadtex =  new THREE.TextureLoader().load('./lroc_color_poles_1k.jpg');
const material = new THREE.MeshBasicMaterial( { 
    map: loadtex

} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 40;

function Animate() {
	requestAnimationFrame( Animate );
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

export default Animate