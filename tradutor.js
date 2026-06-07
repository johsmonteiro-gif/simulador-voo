// Tradutor simples da DSL para ações no Cesium
const viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProvider: new Cesium.OpenStreetMapImageryProvider(),
  baseLayerPicker: false
});

let altitude = 1000;
let speed = 250;
let coords = { lat: -3, lon: -60 };

const airplane = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(coords.lon, coords.lat, altitude),
  model: { uri: 'models/airplane.glb', scale: 1 }
});

// Atualizar HUD
function updateHUD() {
  document.getElementById('altitude').textContent = altitude;
  document.getElementById('speed').textContent = speed;
  document.getElementById('coords').textContent = coords.lat + ", " + coords.lon;
}
updateHUD();

// Controles básicos
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') altitude += 100;
  if (e.key === 'ArrowDown') altitude -= 100;
  if (e.key === 'ArrowLeft') coords.lon -= 0.1;
  if (e.key === 'ArrowRight') coords.lon += 0.1;
  if (e.key === ' ') speed += 10;
  updateHUD();
});
