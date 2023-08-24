//


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
        }, {
            data: [topic[1]],
            borderColor: "green",
            fill: false
        }, {
            data: [topic[2]],
            borderColor: "blue",
            fill: false
        }, {
            data: [topic[3]],
            borderColor: "orange",
            fill: false
        }, {
            data: [topic[4]],
            borderColor: "pink",
            fill: false
        }, {
            data: [topic[5]],
            borderColor: "purple",
            fill: false
        }, {
            data: [topic[6]],
            borderColor: "yellow",
            fill: false
        }]
    },
    options: {
        legend: { display: true }
    }
});