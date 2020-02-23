// Traffic Chart
Chart.defaults.global.defaultFontColor = 'darkgray';
var traffic = document.getElementById('traffic-chart');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2000],
        backgroundColor: 'rgba(255,160,122, 0.4)',
        borderWidth: 1,
        lineTension: 0,
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderColor:  'rgba(255,160,122, 0.4)',
    }]
};

let trafficOptions = {
    responsive: true,
    aspectRatio: 3,
    animation: {
        duration: 0
    },
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 8
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                fontSize: 8
            }   
        }]
    },
    legend : {
        display: false
    }
};

var trafficChart = new Chart(traffic, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
        
// Daily Traffic Chart
var daily = document.getElementById('daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(255,160,122, 0.4)',
        borderWidth: 1,
        barPercentage: 0.5
    }]
};

const dailyOptions = {
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 8
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero:true,
                fontSize: 8
            }
        }]
    },
    legend : {
        display: false
    }
}

var dailyChart = new Chart(daily, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


// Mobile Traffic Chart
var mobile = document.getElementById('mobile-chart');
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            'rgb(255,160,122)',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'normal'
        }
    }
}

var mobileChart = new Chart(mobile, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});