//api link
const url = "http://127.0.0.1:5000/data";

//function updateCharts
function updateCharts(sample) {
    console.log(sample);

    //iterate through sample and metadata, store as sampleNames and metaData respectively
    d3.json(url).then(function (data) {
        let dataPoints = data;

        let dataPoint = dataPoints.filter(x => x.id == data);
        console.log(dataPoint);

        let result = dataPoint[0];
        console.log(result);

        //define variables
        let locDesc = result.locationdesc.slice(0,52).reverse();
        let topic = result.topic.slice(0,7).reverse();
        let topicDesc = result.topicdesc.slice(0,13).reverse();
        //let dataValue = result.datavalue;
        //let category = result.category.slice(0,3).reverse();
        //let catDesc = result.categorydescslice(0,8).reverse();
        //let catAbbr = result.categoryabbr.slice(0,8).reverse();
        //let lat = result.lat;
        //let lon = result.lon;
        //let year = result.year.slice(0,11).reverse();
        //let locAbbr = result.locationabbr.slice(0,52).reverse();

        //pie chart by state, top morbidities
        let trace1 = [{
          values: topic,
          labels: topic,
          type: "pie",
          name: locDesc,
          hoverinfo: "label+percent",
          textposition: "outside"
        }];
        let layout = {
            height: 400,
            width: 500,
            title: "Mortality % in ${locDesc}"
        };

        Plotly.newPlot("pie", trace1, layout);
    });
}

//update and log
function updateMeta(params) {
    console.log(params);
}
//initialize data on drop-down change
function init() {
    let dropDown = d3.select("#selDataset");

    d3.json(url).then(function (data) {

        let states = data.locDesc;
        console.log(states);
        for (let i = 0; i < states.length; i++) {
            dropDown.append("option").text(states[i]).property("value", states[i]);
        }
        updateCharts(states[0]);
    });
}
//update plots
function optionChanged(params) {
    updateCharts(params);
    updateMeta(params);
};
init();