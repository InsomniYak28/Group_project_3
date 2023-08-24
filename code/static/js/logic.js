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
        let trace1 = [{
          values: topic,
          labels: topic,
          type: "pie",
          hoverInfo: topicDesc
        }];
        let layout = {
            title: "Mortality %"
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