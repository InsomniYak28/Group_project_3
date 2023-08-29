//api link
const url = "http://127.0.0.1:5000/data";


//function updateCharts
function updateCharts(sample) {
    console.log(sample);

    //iterate through sample and metadata, define vars
    d3.json(url).then(function (data) {
        console.log(data);

        let result = data[0];
        console.log(result);

        //create arrays of vars
        let statesArray = [];
        let topicArray = [];
        let descArray = [];
        let yearArray = [];

        //define vars, push to arrays
        let locDesc = result.locationdesc;
        statesArray.push(locDesc.str.slice(0,).reverse());
        let topic = result.topic;
        topicArray.push(topic).str.slice(0,).reverse();
        let topicDesc = result.topicdesc;
        descArray.push(topicDesc.slice(0,).reverse());
        let year = result.year;
        yearArray.push(year.slice(0,).reverse());

        //let dataValue = result.datavalue;
        //let category = result.category;
        //let catDesc = result.categorydesc;
        //let catAbbr = result.categoryabbr;
        //let lat = result.lat;
        //let lon = result.lon;
        //let locAbbr = result.locationabbr;

        //pie chart by state, top morbidities
        //.map(x => `${x}`)
        let trace1 = [{
            values: topic,
            labels: topicArray,
            type: "pie",
            name: locDesc,
            hoverinfo: "label+percent",
            textposition: "outside"
        }];
        let layout = {
            height: 400,
            width: 500,
            title: "Mortality % in Chosen State"
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
        // let states = data.statesArray;
        // console.log(states);
        // for (let i = 0; i < states.length; i++) {
        //     dropDown.append("option").text(states[i]).property("value", states[i]);
        // }
        // updateCharts(states[0]);
        console.log(data);
    });
}
//update plots
function optionChanged(params) {
    updateCharts(params);
    updateMeta(params);
};
init();