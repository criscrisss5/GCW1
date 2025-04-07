import * as THREE from 'three';

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear el renderizador
const renderer = new THREE.WebGLRenderer();
const container = document.querySelector('.pantalla');  // Seleccionar el contenedor con la clase "pantalla"
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);  // Insertar el renderizador dentro del contenedor

// Crear el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1); // Dimensiones del cubo
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Material verde
const cube = new THREE.Mesh(geometry, material);

// Agregar el cubo a la escena
scene.add(cube);

// Colocar la cámara para que vea el cubo
camera.position.z = 5;

// Función de animación
function animate() {
    requestAnimationFrame(animate);

    // Rotar el cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Renderizar la escena desde la cámara
    renderer.render(scene, camera);
}

// Llamar a la función de animación
animate();

// Ajustar el tamaño del renderizador si la ventana cambia de tamaño
window.addEventListener('resize', () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
});
