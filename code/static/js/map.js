// Create the map object
let myMap = L.map('map', {
    center: [40.7, -94.5],
    zoom: 5,
    // layers: [street, mortality]
});

// Add the tile layer
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//read in data from api link
const url = "http://127.0.0.1:5000/topcause";

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    console.log("data")
    console.log(data)

    for (i = 0; i < data.length; i++) {
        console.log(data[i])

        L.marker(
            [data[i]["lat"], data[i]["lon"]]).bindPopup(
                "<h3>State: " + data[i]["locationdesc"] + "</h3><hr>" +
                "<h4>Topic:" + data[i]["topic"] + "</h4>" +
                "<h4>Value:" + data[i]["datavalue"] + "</h4>"
            ).addTo(myMap);
    }


});