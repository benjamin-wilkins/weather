window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    none: 'rgba(0, 0, 0, 0)'
}

let temperature = new Chart(document.getElementById("temperature").getContext("2d"), {
    type: 'line',
    fill: false,
    data: {
        labels:["13/2/2021","14/2/2021","15/2/2021","16/2/2021","17/2/2021","18/2/2021","19/2/2021"],
        fill: false,
        datasets:[{
                label:"MET Office",
                borderColor:window.chartColors.red,
                backgroundColor: window.chartColors.none,
                data:[-1,2,9,8,9,5,9]
            },
            {
                label:"My Observations",
                borderColor:window.chartColors.blue,
                backgroundColor: window.chartColors.none,
                data:[-3,0,7,7,5,10,9]
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
    fill: false,
    data: {
        labels:["13/2/2021","14/2/2021","15/2/2021","16/2/2021","17/2/2021","18/2/2021","19/2/2021"],
        fill: false,
        datasets:[{
                label:"MET Office",
                borderColor:window.chartColors.red,
                backgroundColor: window.chartColors.none,
                data:[50,90,5,90,30,5,60]
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
    fill: false,
    data: {
        labels:["13/2/2021","14/2/2021","15/2/2021","16/2/2021","17/2/2021","18/2/2021","19/2/2021"],
        fill: false,
        datasets:[{
                label:"My Observations",
                borderColor:window.chartColors.blue,
                backgroundColor: window.chartColors.none,
                data:[0,1,3,5,3,5,0]
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
                data:[5,0,0,0]
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
                data:[0,4,1,1]
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
                data:[0,0,0,0,0,1,3,1,0,2]
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
                data:[0,0,1,2]
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
    fill: false,
    data: {
        labels:["13/2/2021","14/2/2021","15/2/2021","16/2/2021","17/2/2021","18/2/2021","19/2/2021"],
        datasets:[{
                label:"My Observations",
                borderColor:window.chartColors.blue,
                backgroundColor: window.chartColors.none,
                data:[8,8,6,5,8,1,8]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});
