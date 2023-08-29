function createMap(mortality) {

        // Create the base layers.
        let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
    
        let myMap = L.map("map", {
            center: [37.09, -95.71],
            zoom: 5,
            layers: [mortality]
          });


// let baseStateMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

function createMarkers(diseases) {

        // // Pull the location from data.
        let states =diseases.data.LocationDesc;
    
        // Initialize an array to hold markers.
        let Markers = [];
    
        // Loop through array.
        for (let index = 0; index < data.length; index++) {
            let info = data[index];
    
            // For each item, create a marker, and bind a popup with the name.
            let MarkerLoc = L.marker([data.lat, data.lon])
                .bindPopup("<h3>" + info.categorydesc + "<h3><h3>Disease: " + info.topic + "</h3>");
    
            // Add the marker to the array.
            Markers.push(MarkerLoc);
        }
        // Create a layer group that's made from the array, and pass it to the createMap function.
        createMap(L.layerGroup(Markers));

    // Perform an API call to get info. Call createMarkers when it completes.
    d3.json("http://127.0.0.1:5000/data").then(createMarkers);

    }}