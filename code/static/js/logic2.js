//api link
let url = "http://127.0.0.1:5000/data";

d3.json(url).then(function (data) {
  let result = data.data;
  //console.log("result", result);

  let asthma = result.filter(item => item["topic"] == "Asthma");
  let alcohol = result.filter(item => item["topic"] == "Alcohol");
  let diabetes = result.filter(item => item["topic"] == "Diabetes");
  let cardio = result.filter(item => item["topic"] == "Cardiovascular Disease");
  let pulmonary = result.filter(item => item["topic"] == "Chronic Obstructive Pulmonary Disease");
  let kidney = result.filter(item => item["topic"] == "Chronic Kidney Disease");
  let overarching = result.filter(item => item["topic"] == "Overarching Conditions");

  let asthmaData = {};
  console.log(asthmaData);
  asthma.forEach(item => {
    let value = item["year"];
    if (!asthmaData[value]) {
      asthmaData[value] = 1;
    } else {
      asthmaData[value]++;
    }
});
let alcoholData = {};
console.log(alcoholData);
  alcohol.forEach(item => {
    let value = item["year"];
    if (!alcoholData[value]) {
      alcoholData[value] = 1;
    } else {
      alcoholData[value]++;
    }
});
let diabetesData = {};
console.log(diabetesData);
  diabetes.forEach(item => {
    let value = item["year"];
    if (!diabetesData[value]) {
      diabetesData[value] = 1;
    } else {
      diabetesData[value]++;
    }
});
let cardioData = {};
console.log(cardioData);
  cardio.forEach(item => {
    let value = item["year"];
    if (!cardioData[value]) {
      cardioData[value] = 1;
    } else {
      cardioData[value]++;
    }
});
let pulmonaryData = {};
console.log(pulmonaryData);
  pulmonary.forEach(item => {
    let value = item["year"];
    if (!pulmonaryData[value]) {
      pulmonaryData[value] = 1;
    } else {
      pulmonaryData[value]++;
    }
});
let kidneyData = {};
console.log(kidneyData);
  kidney.forEach(item => {
    let value = item["year"];
    if (!kidneyData[value]) {
      kidneyData[value] = 1;
    } else {
      kidneyData[value]++;
    }
});
let overData = {};
console.log(overData);
  overarching.forEach(item => {
    let value = item["year"];
    if (!overData[value]) {
      overData[value] = 1;
    } else {
      overData[value]++;
    }
});

let labels = Object.keys(asthmaData);

let asthmaValues = Object.values(asthmaData);
let alcoholValues = Object.values(alcoholData);
let diabetesValues = Object.values(diabetesData);
let cardioValues = Object.values(cardioData);
let pulmonaryValues = Object.values(pulmonaryData);
let kidneyValues = Object.values(kidneyData);
let overValues = Object.values(overData);

  new Chart(document.getElementById("line"), {
    type : 'line',
    data : {
      labels : labels,
      datasets : [
          {
            data: asthmaValues,
            label: "Asthma",
            borderColor: "red",
            fill: false
          },
          {
            data : alcoholValues,
            label : "Alcohol",
            borderColor : "blue",
            fill : false
          },
          {
            data : diabetesValues,
            label : "Diabetes",
            borderColor : "green",
            fill : false
          },
          {
            data : cardioValues,
            label : "Cardiovascular Disease",
            borderColor : "yellow",
            fill : false
          },
          {
            data : pulmonaryValues,
            label : "Chronic Obstructive Pulmonary Disease",
            borderColor : "purple",
            fill : false
          },
          {
            data : kidneyValues,
            label : "Chronic Kidney Disease",
            borderColor : "orange",
            fill : false
          },
          {
            data : overValues,
            label : "Overarching Conditions",
            borderColor : "pink",
            fill : false
          } ]
    },
    options : {
      title : {
        display : true,
        text : 'Mortality over Time'
      }
    }
  });

})