//api link
const url = "http://127.0.0.1:5000/data";


//function updateCharts, creates pie chart based on arrays from function init()
function updateCharts(sample) {
    console.log("sample", sample);

    d3.json(url).then(function (data) {
        let result = data.data;

        let stateTopicData = result.filter(item => item["locationdesc"] == sample);
        console.log("stateTopicData", stateTopicData);

        let myData = {};
        console.log("myData", myData);

        stateTopicData.forEach(item => {
            let value = item["topic"];
            if (!myData[value]) {
                myData[value] = 1;
            } else {
                myData[value]++;
            }
        });

        let labels = Object.keys(myData);
        console.log("labels", labels);
        let values = Object.values(myData);
        console.log("values", values);


        // Create Pie chart using Plotly
        let pieData = [{
            labels: labels,
            values: values,
            type: "pie"
        }];
        
        Plotly.newPlot("pie", pieData);
    });
}


//update and log
function updateMeta(sample) {
    console.log(sample);
}


//initialize data on drop-down change
function init() {
    let dropDown = d3.select("#selDataset");

    d3.json(url).then(function (data) {
        let result = data.data;

        //remove duplicates so only unique locations are passed into statesArray
        let statesArray = result.reduce(function (prev, curr) {
            if (prev.states.indexOf(curr.locationdesc) === -1) {
                prev.states.push(curr.locationdesc);
            }
            return prev;
        }, { states: [] });

        //dropdown event
        for (let i = 0; i < statesArray.states.length; i++) {
            dropDown.append("option").text(statesArray.states[i]).property("value", statesArray.states[i]);
        }

        updateCharts(data);
    });
}

//update plots
function optionChanged(sample) {

    updateCharts(sample);
    updateMeta(sample);
};

init();