'use strict';
function renderChart() {

    const businessHoursArray = ['8am','9am','10am','11am','12pm','1pm','2pm','3pm'];
    const busyAmountArray = [3,5,3,2,4,3,3,1];
    const yLabels = {
        0: 'nearly empty', 1: 'not busy', 2: 'less busy than usual', 3: 'as busy a usual', 4: 'busier than usual', 5: 'very busy'
    }


    
    const ctx = document.getElementById('busy-chart').getContext('2d');
    const imageChart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: businessHoursArray,
            datasets: [{
                label: 'Foot Traffic',
                borderColor: '#77B5BB',
                backgroundColor: 'transparent',
                hoverBackgroundColor: '#77B5BB',
                lineTension: 0.3,
                borderWidth: 15,
                showLine: true,
                data : busyAmountArray,
            },]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(label) {
                        switch (label) {
                            case 0:
                                return 'nearlyempty';
                            case 1:
                                return 'not busy';
                            case 2:
                                return 'less busy than usual';
                            case 3:
                                return 'as busy as usual';
                            case 4:
                                return 'busier than usual';
                            case 5:
                                return 'very busy';
                        }
                    }
                    }
                }]
            }
        }
    })
}
renderChart();