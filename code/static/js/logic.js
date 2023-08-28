//api link
const url = "http://127.0.0.1:5000/data";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let statesArray = [];
    let topicArray = [];
    let descArray = [];
    let yearArray = [];

    let result = data[0];
    result.forEach(result => {
        let locDesc = result.locationdesc;
        statesArray.push(locDesc.str.slice(0,).reverse());
        let topic = result.topic;
        topicArray.push(topic).str.slice(0,).reverse();
        let topicDesc = result.topicdesc;
        descArray.push(topicDesc.slice(0,).reverse());
        let year = result.year;
        yearArray.push(year.slice(0,).reverse());
    });
}

async function ChartIt() {
    await getData();
    let element = document.getElementById('pie');
    let pieChart = new ChartIt(element, {
        type: 'pie',
        data: {
            labels: topicArray,
            datasets: [{
                backgroundColor: barColors,
                data: topic,
            }]
        },
        options: {
            title: {
                display: "true",
                text: "Mortality % in ${descArray}"
            }
        }
    });
}

ChartIt();

// //function updateCharts
// function updateCharts(sample) {
//     console.log(sample);

//     //iterate through sample and metadata, define vars
//     d3.json(url).then(function (data) {
//         let dataPoints = data;
//         let dataPoint = dataPoints.filter(x => x.id == data);
//         console.log(dataPoint);

//         let result = dataPoint[0];
//         console.log(result);

//         //create arrays of vars
//         let statesArray = [];
//         let topicArray = [];
//         let descArray = [];

//         //define vars, push to arrays
//         let locDesc = result.locationdesc;
//         statesArray.push(locDesc.str.slice(0,).reverse());
//         let topic = result.topic;
//         topicArray.push(topic).str.slice(0,).reverse();
//         let topicDesc = result.topicdesc;
//         descArray.push(topicDesc.slice(0,).reverse());

//         //let dataValue = result.datavalue;
//         //let category = result.category.slice(0,3).reverse();
//         //let catDesc = result.categorydescslice(0,8).reverse();
//         //let catAbbr = result.categoryabbr.slice(0,8).reverse();
//         //let lat = result.lat;
//         //let lon = result.lon;
//         //let year = result.year.slice(0,11).reverse();
//         //let locAbbr = result.locationabbr.slice(0,52).reverse();

//         //pie chart by state, top morbidities
//         //.map(x => `${x}`)
//         let trace1 = [{
//           values: topic,
//           labels: topicArray,
//           type: "pie",
//           name: locDesc.map(x => `${x}`),
//           hoverinfo: "label+percent",
//           textposition: "outside"
//         }];
//         let layout = {
//             height: 400,
//             width: 500,
//             title: "Mortality % in `${locDesc}`"
//         };

//         Plotly.newPlot("pie", trace1, layout);
//     });
// }

//update and log
// function updateMeta(params) {
//     console.log(params);
// }
// //initialize data on drop-down change
// function init() {
//     let dropDown = d3.select("#selDataset");

//     d3.json(url).then(function (data) {

//         let states = data.statesArray;
//         console.log(states);
//         for (let i = 0; i < states.length; i++) {
//             dropDown.append("option").text(states[i]).property("value", states[i]);
//         }
//         updateCharts(states[0]);
//     });
// }
// //update plots
// function optionChanged(params) {
//     updateCharts(params);
//     updateMeta(params);
// };
// init();