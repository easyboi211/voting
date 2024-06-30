// let xValues = ["Tinubu", "Atiku", "Obi", "Kwankawaso"];
// let x2Values = [ "Ezekiel", "Isaac", "Nelson", 'Abiola']
// let x3Values = ["TOTAL VALID VOTES", "TOTAL REJECTED VOTES"];
// let yValues = [8794726, 6984520, 6101533, 1496687];
// let y2Values = [ 900000, 500000, 736832, 1496687];
// let y3Values = [12, 12, 12, 1];
// let y4Values = [8, 6, 9, 14];
let multiValues = ['FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT'];
// var barColors = ['rgba(255, 99, 132, 0.2)',
// 'rgba(255, 159, 64, 0.5)',
// 'rgba(255, 205, 86, 0.5)',
// 'rgba(75, 192, 192, 0.5)',
// 'rgba(54, 162, 235, 0.5)',
// 'rgba(153, 102, 255, 0.5)',
// 'rgba(201, 203, 207, 0.5)'];
// var barColor = ['rgba(255, 99, 132)',
// 'rgba(255, 159, 64)',
// 'rgba(255, 205, 86)',
// 'rgba(75, 192, 192)',
// 'rgba(54, 162, 235)',
// 'rgba(153, 102, 255)',
// 'rgba(201, 203, 207)'];




let multilineData = {
    labels: multiValues,
    datasets: [{
        label: 'John',
        data: [365, 363, 393, 381],
        borderColor: "red",
        fill: false
    }, { 
        label: 'John',
        data: [355, 353, 333, 341],
        borderColor: "green",
        fill: false
    }, { 
        label: 'John',
        data: [345, 353, 373, 381],
        borderColor: "blue",
        fill: false
    }]
}

let multi = {
    type: 'line',
    data: multilineData,
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
let multiChart = new Chart(
    document.getElementById('multi-chart'),
    multi
);

let scdMultilineData = {
    labels: multiValues,
    datasets: [{
        label: 'John',
        data: [355, 363, 383, 371],
        borderColor: "red",
        fill: false
    }, { 
        label: 'John',
        data: [365, 363, 363, 361],
        borderColor: "green",
        fill: false
    }, { 
        label: 'John',
        data: [365, 363, 353, 353],
        borderColor: "blue",
        fill: false
    }]
    
}

let scdmulti = {
    type: 'line',
    data: scdMultilineData,
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
let scdmultiChart = new Chart(
    document.getElementById('multi-chart-scd'),
    scdmulti
);

// let pStateDistribution = {
//     type: "doughnut",
//     data: {
//       labels: xValues,
//       datasets: [{
//         backgroundColor: barColor,
//         data: y3Values
//       }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: "Presidential Election State Distribution"
//       }
//     }
// }

// let presidentStateDistribution = new Chart(
//     document.getElementById('president-state-distribution'),
//     pStateDistribution
// )
// let gStateDistribution = {
//     type: "doughnut",
//     data: {
//       labels: x2Values,
//       datasets: [{
//         backgroundColor: barColor,
//         data: y4Values
//       }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: "Presidential Election State Distribution"
//       }
//     }
// }

// let governorLocalDistribution = new Chart(
//     document.getElementById('governor-local-distribution'),
//     gStateDistribution
// )
// let gVoteDistribution = {
//     type: "doughnut",
//     data: {
//       labels: x2Values,
//       datasets: [{
//         backgroundColor: barColor,
//         data: y2Values
//       }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: "Presidential Election State Distribution"
//       }
//     }
// }

// let governorVoteDistribution = new Chart(
//     document.getElementById('governor-vote-distribution'),
//     gVoteDistribution
// )


// let pVoteDistribution = {
//     type: "doughnut",
//     data: {
//       labels: xValues,
//       datasets: [{
//         backgroundColor: barColor,
//         data: yValues
//       }]
//     },
//     options: {
//       title: {
//         display: true,
//         text: "Presidential Election State Distribution"
//       }
//     }
// }

// let presidentVoteDistribution = new Chart(
//     document.getElementById('president-vote-distribution'),
//     pVoteDistribution
// )

// let finalPresidentResult = {
//     type: 'bar',
//     data: {
//         labels: xValues,
//         datasets: [{
//             backgroundColor: barColors,
//             data: yValues,
//         }]
//     },
//     options: {
//         legend: {display: false},
//         title: {
//             display: true,
//             text: "Presido Election Result"
//         }
//     }
// }

// let finalPResult = new Chart(
//     document.getElementById('final-p-result'),
//     finalPresidentResult
// )

// let finalGovernorResult = {
//     type: 'bar',
//     data: {
//         labels: x2Values,
//         datasets: [{
//             backgroundColor: barColors,
//             data: y2Values,
//         }]
//     },
//     options: {
//         legend: {display: false},
//         title: {
//             display: true,
//             text: "Governo Election Result"
//         }
//     }
// }

// let finalGResult = new Chart(
//     document.getElementById('final-g-result'),
//     finalGovernorResult
// )