//Add a link to the providing CDN (Content Delivery Network)
< !DOCTYPE;
html > ;
React.createElement("html", null,
    React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js" }),
    React.createElement("body", null,
        "//Add a canvas to where you want to draw the chart:",
        React.createElement("canvas", { id: "myChart", style: "width:100%;max-width:700px" }),
        React.createElement("script", null,
            "//Line Chart Syntax const xValues = [topic]; const yValues = [dataValue]; new Chart(\"myChart\", ",
            type,
            ": \"line\", data: ",
            labels,
            ": xValues, yValues datasets: [",
            data,
            ": [topic], borderColor: \"red\", fill: false backgroundColor: barColors }] }, options: ",
            legend,
            ": ",
            display,
            ": false} } });"),
        ";"));
