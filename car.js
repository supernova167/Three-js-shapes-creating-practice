// Im just starting to learn three.js.So i thought it would be a good idea to make car using some geometries to familiarize myself with the basics of three js 

// Setting up the scene
const scene = new THREE.Scene();

// Setting up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);

// Setting up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// pushing the camera back from the (0, 0, 0) so the scene can me viewed 

camera.position.z = 5;

// Making the ground
const groundGeometry = new THREE.PlaneGeometry(4, 5);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xd6a10f, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(ground);
ground.rotation.x = -Math.PI / 2;

// Setting up touch / mouse controls to allow the car to be viewed from all angles

const controls = new OrbitControls(camera, renderer.domElement);

const carBodyGeo = new THREE.BoxGeometry(1, 0.5, 3);
const carBodyMat = new THREE.MeshBasicMaterial({ color: 0x7f0fff });
const carBody = new THREE.Mesh(carBodyGeo, carBodyMat);
carBody.position.y = 0.5;
scene.add(carBody);

// The car tiers
const tierGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.3);
const tierMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const tier1 = new THREE.Mesh(tierGeo, tierMat);
tier1.position.y = 0.3;
tier1.position.x = -0.5;
tier1.position.z = 0.9;

tier1.rotation.x = -Math.PI * 0.5;
tier1.rotation.z = -Math.PI * 0.5;
scene.add(tier1);

const tier2 = new THREE.Mesh(tierGeo, tierMat);
tier2.position.y = 0.3;
tier2.position.x = 0.5;
tier2.position.z = 0.9;

tier2.rotation.x = -Math.PI * 0.5;
tier2.rotation.z = -Math.PI * 0.5;

scene.add(tier2);

const tier3 = new THREE.Mesh(tierGeo, tierMat);
tier3.position.y = 0.3;
tier3.position.x = 0.5;
tier3.position.z = -0.9;

tier3.rotation.x = -Math.PI * 0.5;
tier3.rotation.z = -Math.PI * 0.5

scene.add(tier3);

const tier4 = new THREE.Mesh(tierGeo, tierMat);
tier4.position.y = 0.3;
tier4.position.x = -0.5;
tier4.position.z = -0.9;

tier4.rotation.x = -Math.PI * 0.5;
tier4.rotation.z = -Math.PI * 0.5

scene.add(tier4);

// Tier Rims
const rimGeo = new THREE.CylinderGeometry(0.15, 0.15, 0.15);
const rimMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
const rim1 = new THREE.Mesh(rimGeo, rimMat);
scene.add(rim1);
rim1.position.y = 0.3;
rim1.position.x = -0.6;
rim1.position.z = 0.9;
rim1.rotation.x = -Math.PI * 0.5;
rim1.rotation.z = -Math.PI * 0.5;

const rim2 = new THREE.Mesh(rimGeo, rimMat);
scene.add(rim2);
rim2.position.y = 0.3;
rim2.position.x = 0.6;
rim2.position.z = 0.9;

rim2.rotation.x = -Math.PI * 0.5;
rim2.rotation.z = -Math.PI * 0.5;

const rim3 = new THREE.Mesh(rimGeo, rimMat);
scene.add(rim3);
rim3.position.y = 0.3;
rim3.position.x = 0.6;
rim3.position.z = -0.9;

rim3.rotation.x = -Math.PI * 0.5;
rim3.rotation.z = -Math.PI * 0.5

const rim4 = new THREE.Mesh(rimGeo, rimMat);
scene.add(rim4);
rim4.position.y = 0.3;
rim4.position.x = -0.6;
rim4.position.z = -0.9;

rim4.rotation.x = -Math.PI * 0.5;
rim4.rotation.z = -Math.PI * 0.5

// Tier back light
const backLightGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const backLightMat = new THREE.MeshBasicMaterial({ color: 0xFF0000 });

const backLight1 = new THREE.Mesh(backLightGeo, backLightMat);
scene.add(backLight1);

backLight1.position.x = 0.3;
backLight1.position.y = 0.5;
backLight1.position.z = -1.5;

const backLight2 = new THREE.Mesh(backLightGeo, backLightMat);
scene.add(backLight2);

backLight2.position.x = -0.3;
backLight2.position.y = 0.5;
backLight2.position.z = -1.5;

// Back Plate

const plateGeo = new THREE.BoxGeometry(0.3, 0.2, 0.1);
const plateMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
const plate = new THREE.Mesh(plateGeo, plateMat);
scene.add(plate);
plate.position.z = -1.5;
plate.position.y = 0.5;

// Car HeadLights
const headLightGeo = new THREE.SphereGeometry(0.15, 32, 16);
const headLightMat = new THREE.MeshBasicMaterial({ color: 0xfcf003 });

const headLight1 = new THREE.Mesh(headLightGeo, headLightMat);
scene.add(headLight1);
headLight1.position.y = 0.5;
headLight1.position.x = 0.3;
headLight1.position.z = 1.5;

const headLight2 = new THREE.Mesh(headLightGeo, headLightMat);
scene.add(headLight2);
headLight2.position.y = 0.5;
headLight2.position.x = -0.3;
headLight2.position.z = 1.5;

// Car Roof

// Triangular Parts
const triangle = new THREE.Shape();
triangle.moveTo(0, 0);
triangle.lineTo(0.7, 0);
triangle.lineTo(0, 0.7);

const roofGeoT = new THREE.ShapeGeometry(triangle);
const roofMatT = new THREE.MeshBasicMaterial({ color: 0x7f0fff, side: THREE.DoubleSide });

const roofT1 = new THREE.Mesh(roofGeoT, roofMatT);
scene.add(roofT1);
roofT1.position.x = 0.5;
roofT1.position.z = 0.5;
roofT1.position.y = 0.5;
roofT1.rotation.y = -Math.PI * 0.5;

const roofT2 = new THREE.Mesh(roofGeoT, roofMatT);
scene.add(roofT2);
roofT2.position.x = -0.5;
roofT2.position.z = 0.5;
roofT2.position.y = 0.5;
roofT2.rotation.y = -Math.PI * 0.5;

// Square Parts
const roofSGeo1 = new THREE.PlaneGeometry(1, 0.6);
const roofSGeo2 = new THREE.PlaneGeometry(1, 1.5);
const roofSGeo3 = new THREE.PlaneGeometry(1.5, 0.45);
const roofSGeo4 = new THREE.PlaneGeometry(1, 0.5);

const roofSMat = new THREE.MeshBasicMaterial({ color: 0x7f0fff, side: THREE.DoubleSide });

const roofS1 = new THREE.Mesh(roofSGeo1, roofSMat);
scene.add(roofS1);
roofS1.position.z = 0.7;
roofS1.position.y = 1;
roofS1.rotation.x = -Math.PI / 4;

const roofS2 = new THREE.Mesh(roofSGeo2, roofSMat);
scene.add(roofS2);
roofS2.position.y = 1.2;
roofS2.position.z = -0.25;
roofS2.rotation.x = -Math.PI * 0.5;

const roofS3 = new THREE.Mesh(roofSGeo3, roofSMat);
scene.add(roofS3);
roofS3.position.y = 0.97;
roofS3.position.z = -0.25;
roofS3.position.x = 0.5;
roofS3.rotation.y = Math.PI * 0.5;

const roofS4 = new THREE.Mesh(roofSGeo3, roofSMat);
scene.add(roofS4);
roofS4.position.y = 0.97;
roofS4.position.z = -0.25;
roofS4.position.x = -0.5;
roofS4.rotation.y = -Math.PI * 0.5;

const roofS5 = new THREE.Mesh(roofSGeo4, roofSMat);
scene.add(roofS5);
roofS5.position.y = 0.97;
roofS5.position.z = -0.8;
roofS5.rotation.y = -Math.PI;

// Car Windows

// Triangle Part

const tri = new THREE.Shape();
tri.moveTo(0, 0);
tri.lineTo(0.35, 0);
tri.lineTo(0, 0.35);

const windowGeoT = new THREE.ShapeGeometry(tri);
const windowMatT = new THREE.MeshBasicMaterial({ color: 0x30a6f0, side: THREE.DoubleSide });

const windowT1 = new THREE.Mesh(windowGeoT, windowMatT);

scene.add(windowT1);
windowT1.position.x = 0.52;
windowT1.position.z = 0.5;
windowT1.position.y = 0.7;
windowT1.rotation.y = -Math.PI * 0.5;

const windowT2 = new THREE.Mesh(windowGeoT, windowMatT);

scene.add(windowT2);
windowT2.position.x = -0.52;
windowT2.position.z = 0.5;
windowT2.position.y = 0.7;
windowT2.rotation.y = -Math.PI * 0.5;

// Square Parts

const windowGeoS1 = new THREE.PlaneGeometry(0.7, 0.5);
const windowGeoS2 = new THREE.PlaneGeometry(0.5, 0.35);
const windowMatS = new THREE.MeshBasicMaterial({ color: 0x30a6f0, side: THREE.DoubleSide });

const windowS1 = new THREE.Mesh(windowGeoS1, windowMatS);
scene.add(windowS1);
windowS1.position.z = 0.8;
windowS1.position.y = 0.92;
windowS1.rotation.x = -Math.PI / 4;

const windowS2 = new THREE.Mesh(windowGeoS2, windowMatS);
scene.add(windowS2);
windowS2.position.y = 0.87;
windowS2.position.z = 0.25;
windowS2.position.x = 0.52;
windowS2.rotation.y = Math.PI * 0.5;

const windowS3 = new THREE.Mesh(windowGeoS2, windowMatS);
scene.add(windowS3);
windowS3.position.y = 0.87;
windowS3.position.z = 0.25;
windowS3.position.x = -0.52;
windowS3.rotation.y = Math.PI * 0.5;

const windowS4 = new THREE.Mesh(windowGeoS2, windowMatS);
scene.add(windowS4);
windowS4.position.y = 0.87;
windowS4.position.z = -0.5;
windowS4.position.x = -0.52;
windowS4.rotation.y = Math.PI * 0.5;

const windowS5 = new THREE.Mesh(windowGeoS2, windowMatS);
scene.add(windowS5);
windowS5.position.y = 0.87;
windowS5.position.z = -0.5;
windowS5.position.x = 0.52;
windowS5.rotation.y = Math.PI * 0.5;

// Back number plate bars

const barGeo = new THREE.BoxGeometry(0.03, 0.15, 0.12);
const barMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });

const bar1 = new THREE.Mesh(barGeo, barMat);
scene.add(bar1);
bar1.position.z = -1.5;
bar1.position.y = 0.5;
bar1.position.x = 0.07;

const bar2 = new THREE.Mesh(barGeo, barMat);
scene.add(bar2);
bar2.position.z = -1.5;
bar2.position.y = 0.5;

const bar3 = new THREE.Mesh(barGeo, barMat);
scene.add(bar3);
bar3.position.z = -1.5;
bar3.position.y = 0.5;
bar3.position.x = -0.07;

// Car door handle
const handleGeo = new THREE.BoxGeometry(0.2, 0.1, 0.1);
const handleMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

const handle1 = new THREE.Mesh(handleGeo, handleMat);
scene.add(handle1);
handle1.position.x = 0.5;
handle1.position.y = 0.6;
handle1.position.z = 0.3;
handle1.rotation.y = Math.PI * 0.5;

const handle2 = new THREE.Mesh(handleGeo, handleMat);
scene.add(handle2);
handle2.position.x = -0.5;
handle2.position.y = 0.6;
handle2.position.z = 0.3;
handle2.rotation.y = Math.PI * 0.5;

const handle3 = new THREE.Mesh(handleGeo, handleMat);
scene.add(handle3);
handle3.position.x = 0.5;
handle3.position.y = 0.6;
handle3.position.z = -0.5;
handle3.rotation.y = Math.PI * 0.5;

const handle4 = new THREE.Mesh(handleGeo, handleMat);
scene.add(handle4);
handle4.position.x = -0.5;
handle4.position.y = 0.6;
handle4.position.z = -0.5;
handle4.rotation.y = Math.PI * 0.5;

// Animation Loop 
// This renders the scene every frame

function animate(time) {
  scene.rotation.y += 0.01;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();