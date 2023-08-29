// Create a map object.
// let stateMap = L.map('map').setView([37.8, -96], 4);
let states = [];
let state = [];
let data = [];

let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store our API 
let queryUrl = "http://127.0.0.1:5000/data";

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  //  createFeatures(data.features);
  console.log(data)
});

;

// Looping through the array, create one marker for each state and add it to the map.
for (let i = 0; i < data.length; i++) {
  let state = states[i];
  L.marker(data.latlon)
    .bindPopup(`<h1>${data.locationdesc}</h1> <hr> <h3>Disease: ${data.topic}</h3>`)
    .addTo(myMap);
}