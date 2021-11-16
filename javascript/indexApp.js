'use strict';
function renderChart() {

    const imageNamesArray = [];
    const busyTimesArray = [];
    const imageShownArray = [];

    for (let i = 0; i < ImageObject.all.length; i += 1) {
        const image = ImageObject.all[i];

        const singleImageName = image.imgName;
        imageNamesArray.push(singleImageName);

        const singleImageVote = image.votes;
        busyTimesArray.push(singleImageVote);

        const singleShownImage = image.shown;
        imageShownArray.push(singleShownImage);
    }
    
    const ctx = document.getElementById('results-chart').getContext('2d');
    const imageChart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: imageNamesArray,
            datasets: [{
                label: 'Image Votes',
                backgroundColor: '#2a2a28',
                borderColor: '#353831',
                data : busyTimesArray,
            },{
                label: 'Image Shown',
                backgroundColor: '#2a2a28',
                borderColor: '#353831',
                data : imageShownArray,
            }]
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
    document.getElementById('results-chart-section').hidden = false;
}