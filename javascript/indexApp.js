'use strict';
function renderChart() {

    const businessHoursArray = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm'];
    const busyAmountArray = [3,5,4,3,2,2,3,4];
    const yLabels = {
        0: 'nearly empty', 1: 'not busy', 2: 'less busy than usual', 3: 'as busy a usual', 4: 'busier than usual', 5: 'very busy'
    }


    
    const ctx = document.getElementById('busy-chart').getContext('2d');
    const imageChart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: businessHoursArray,
            datasets: [{
                data : busyAmountArray,
            },]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })
}
renderChart();