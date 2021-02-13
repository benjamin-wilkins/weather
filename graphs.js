let temperature = new Chart(document.getElementById("temperature").getContext("2d"), {
    type: 'line',
    data: {
        labels:[],
        datasets:[{
                label:"MET Office",
                backgroundColor:window.chartColors.red,
                borderColor:window.chartColors.red,
                data:[]
            },
            {
                label:"My Observations",
                backgroundColor:window.chartColors.blue,
                borderColor:window.chartColors.blue,
                data:[]
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
        labels:[],
        datasets:[{
                label:"MET Office",
                backgroundColor:window.chartColors.red,
                borderColor:window.chartColors.red,
                data:[]
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
        labels:[],
        datasets:[{
                label:"My Observations",
                backgroundColor:window.chartColors.blue,
                borderColor:window.chartColors.blue,
                data:[]
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

let windDirection = new PolarArea(document.getElementById("windDirection"), {
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
                data:[0,0,0,0,0,0,0,0,0,0]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});

let cloudDirection = new PolarArea(document.getElementById("cloudDirection"), {
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
        labels:[],
        datasets:[{
                label:"My Observations",
                backgroundColor:window.chartColors.blue,
                borderColor:window.chartColors.blue,
                data:[]
            }
        ]
    },
    options: {
        layout: {
            padding: 20
        }
    }
});
