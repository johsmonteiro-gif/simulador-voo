// Tradutor da DSL em português para JavaScript
console.log("Tradutor DSL iniciado...");

// Exemplo de tradução
const viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProvider: new Cesium.OpenStreetMapImageryProvider(),
  baseLayerPicker: false
});
