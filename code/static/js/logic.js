//api link
const url = "";

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
        let yearStart = result.YearStart;
        let yearEnd = result.YearEnd;
        let locAbbr = result.LocationAbbr.slice(0,53).reverse();
        let locDesc = result.LocationDesc.slice(0,53).reverse();
        let topic = result.Topic.slice(0,7).reverse();
        let topicDesc = result.TopicDesc.slice(0,11).reverse();
        let dataValue = result.DataValue;
        let cat = result.Category.slice(0,3).reverse();
        let catDesc = result.CategoryDesc.slice(0,8).reverse();
        let catAbbr = result.CategoryAbbr.slice(0,8).reverse();
        let geoLoc = result.GeoLocation;


        //pie chart by state, top morbidities
        let trace1 = {}
        let layout = {
            title: "TITLE HERE"
        };
        let traceData1 = [trace1];
        Plotly.newPlot("pie", traceData1, layout);

        //line plot for morbidities over time by year
        const xValues = [yearStart];

        new Chart("myChart", {
          type: "line",
          data: {
            labels: xValues,
            datasets: [{
              data: [topic[0]],
              borderColor: "red",
              fill: false
            },{
              data: [topic[1]],
              borderColor: "green",
              fill: false
            },{
              data: [topic[2]],
              borderColor: "blue",
              fill: false
            },{
                data: [topic[3]],
                borderColor: "orange",
                fill: false
            },{
                data: [topic[4]],
                borderColor: "pink",
                fill: false
            },{
                data: [topic[5]],
                borderColor: "purple",
                fill: false
            },{
                data: [topic[6]],
                borderColor: "yellow",
                fill: false
            }]
          },
          options: {
            legend: {display: true}
          }
        });

        //Map w hover data
        let myMap = {}


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

        let dropStates = data.LocationDesc;
        console.log(dropStates);
        for (let i = 0; i < dropStates.length; i++) {
            dropDown.append("option").text(dropStates[i]).property("value", dropStates[i]);
        }
        updateCharts(dropStates[0]);
    });
}
//update plots
function optionChanged(params) {
    updateCharts(params);
    updateMeta(params);
};
init();