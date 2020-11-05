module.exports = [
    {
        labels: ["Saving More", "Saving Less", "Action", "Inaction", "Known", "Unknown", "Pedestrians", "Passengers"],
        datasets: [
            {
                label: "You",
                data: [.5, .5, .5, .6, .3, .6, .4, .7],
                backgroundColor: 'rgb(255, 103, 135, .3)',
                borderColor: 'rgb(255, 103, 135)',
                pointBackgroundColor: 'rgb(255,103,135)',
                pointBorderColor: '#FFFFFF'
            },
            {
                label: "Global Average",
                data: [.7, .6, .4, .4, .5, .5, .6, .6],
                backgroundColor: 'rgb(54, 162, 235, .3)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#FFFFFF'
            }
        ]
    }
]