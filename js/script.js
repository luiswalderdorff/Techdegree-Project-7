// x remove button

$( ".remove").click(function() {
  $(".alert").hide();
})

// Chart

var ctx = $("#myChart");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "number of visitors",
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 1250],
            borderColor: "#361f58",
            backgroundColor: "rgba(101, 57, 164, 0.4)",
            borderWidth: 1
        }]
    },
    options: {
      maintainAspectRatio: false,
      elements: {
        line: {
            tension: 0
        }
    },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
