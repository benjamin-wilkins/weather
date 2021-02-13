window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)'
}

let temperature = new Chart(document.getElementById("temperature").getContext("2d"), {
    type: 'line',
    data: {
        labels:["13/2/2021"],
        datasets:[{
                label:"MET Office",
                backgroundColor:window.chartColors.red,
                borderColor:window.chartColors.red,
                data:[-1]
            },
            {
                label:"My Observations",
                backgroundColor:window.chartColors.blue,
                borderColor:window.chartColors.blue,
                data:[-3]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let precipitationPercent = new Chart(document.getElementById("precipitationPercent").getContext("2d"), {
    type: 'line',
    data: {
        labels:["13/2/2021"],
        datasets:[{
                label:"MET Office",
                backgroundColor:window.chartColors.red,
                borderColor:window.chartColors.red,
                data:[50]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let precipitationMm = new Chart(document.getElementById("precipitationMm").getContext("2d"), {
    type: 'line',
    data: {
        labels:["13/2/2021"],
        datasets:[{
                label:"My Observations",
                backgroundColor:window.chartColors.blue,
                borderColor:window.chartColors.blue,
                data:[0]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let precipitationType = new Chart(document.getElementById("precipitationType").getContext("2d"), {
    type: 'doughnut',
    data: {
        labels:["Rain", "Hail", "Sleet", "Snow"],
        datasets:[{
                label:"My Observations",
                backgroundColor:[
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.blue,
                ],
                data:[0,0,0,0]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let windDirection = new Chart(document.getElementById("windDirection"), {
    type: 'polarArea',
    data: {
        labels:["North", "East", "South", "West"],
        datasets:[{
                label:"My Observations",
                backgroundColor:[
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.blue,
                ],
                data:[0,1,0,0]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let cloudType = new Chart(document.getElementById("cloudType").getContext("2d"), {
    type: 'doughnut',
    data: {
        labels:["Cirrocumulus", "Cirrus", "Cirostratus", "Altocumulus", "Altostratus", "Cumulus", "Stratocumulus", "Stratus", "Cumulonimbus", "Nimbostratus"],
        datasets:[{
                label:"My Observations",
                backgroundColor:[
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.blue,
                    window.chartColors.green,
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.blue,
                    window.chartColors.green,
                ],
                data:[0,0,0,0,0,0,0,1,0,0]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let cloudDirection = new Chart(document.getElementById("cloudDirection"), {
    type: 'polarArea',
    data: {
        labels:["North", "East", "South", "West"],
        datasets:[{
                label:"My Observations",
                backgroundColor:[
                    window.chartColors.red,
                    window.chartColors.orange,
                    window.chartColors.yellow,
                    window.chartColors.blue,
                ],
                data:[0,0,0,0]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let oktas = new Chart(document.getElementById("oktas").getContext("2d"), {
    type: 'line',
    data: {
        labels:["13/2/2021"],
        datasets:[{
                label:"My Observations",
                backgroundColor:window.chartColors.blue,
                borderColor:window.chartColors.blue,
                data:[8]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});
