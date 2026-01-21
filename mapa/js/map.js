// Inicialización del mapa base
const map = L.map('map', {
  center: [23.6345, -102.5528], // Centro de México
  zoom: 5,
  zoomControl: true
});

// Capa base (CartoDB Positron)
L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    maxZoom: 19
  }
).addTo(map);

// Exponer el mapa globalmente (para otros scripts)
window.map = map;
