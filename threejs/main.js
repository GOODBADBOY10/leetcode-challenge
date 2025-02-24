import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();
// let camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);



// let renderer = new THREE.WebGLRenderer({
//     antialias: true,
// })
// renderer.setSize(window.innerWidth, window.innerHeight)
// // $(`body`).append(renderer.domElement)

// let geometry = new THREE.BoxGeometry();
// let material = new THREE.MeshBasicMaterial({
//     color: 0xff00000
// })

// let cube = new THREE.Mesh(geometry,material)
// scene.add(cube)

// cube.position.z = -3,
// cube.position.x = -10,
// cube.position.y = 3,

// renderer.render(scene, camera)


const canvas = document.querySelector('#canvas')

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas
});

const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2


const scene = new THREE.Scene();
const boxWidth = 1
const boxHeight = 1
const boxDepth = 1

const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)

const material = new THREE.MeshPhongMaterial(
    { color: 0x44aa88 }
)

const cube = new THREE.Mesh(geometry, material)
// console.log(cube);
scene.add(cube)

renderer.render(scene, camera)
// console.log(renderer);


function renders(time) {
    time *= 4
    cube.rotateX = time
    cube.rotateY = time
    renderer.render(scene, camera)
    requestAnimationFrame(renders)
}

requestAnimationFrame(renders);