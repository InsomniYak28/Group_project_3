
trace1 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[0],
    line: {
        color: 'Red',
        width: 3
    }
};

trace2 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[1],
    line: {
        color: 'Blue',
        width: 1
    }
};
trace3 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[2],
    line: {
        color: 'Green',
        width: 1
    }
};
trace4 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[3],
    line: {
        color: 'Purple',
        width: 1
    }
};
trace5 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[4],
    line: {
        color: 'Orange',
        width: 1
    }
};
trace6 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[5],
    line: {
        color: 'Yellow',
        width: 1
    }
};
trace7 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[6],
    line: {
        color: 'Pink',
        width: 1
    }
};
trace8 = {
    type: 'scatter',
    x: yearArray,
    y: topic,
    mode: 'lines',
    name: topicArray[7],
    line: {
        color: 'Black',
        width: 1
    }
};

let layout = {
    title: "Mortality Comparison by Year",
    width: 500,
    height: 500,
    legend: {
        y: 0.5,
        traceorder: 'reversed',
        font: {
            size: 16
        }
    },
    xaxis: {
        title: 'Year'
    },
    yaxis: {
        title: 'number of single, reported mortalities'
    }
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

Plotly.newPlot('line', data, layout);