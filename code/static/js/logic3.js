//leaflet.js map

const stateUrl = "https://leafletjs.com/examples/choropleth/us-states.js"
const api = ""



let stateMap = L.map('map').setView([37.8, -96], 4);

let baseStateMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(statesData).addTo(stateMap);

