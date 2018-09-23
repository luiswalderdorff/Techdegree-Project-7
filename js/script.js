// Bell notifications
$( ".bell").click(function() {
  $(".alert").clone().appendTo(".top").attr("class", "alert-2").css("display", "flex");
  $("alert-2 .remove").attr("class", "remove-2");
  $(".alert").clone().appendTo(".top").attr("class", "alert-3").css("display", "flex");
  $("alert-3 .remove").attr("class", "remove-3");
})

// x remove button

$( ".remove").click(function() {
  $(".alert").hide();
})

$( ".remove-2").click(function() {
  $(".alert-2").hide();
})

$( ".remove-3").click(function() {
  $(".alert-3").hide();
})


// Chart Traffic

var traffic = $("#chartTraffic");



var chartTraffic = new Chart(traffic, {
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
      layout: {

      },
      responsive:true,
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

// Chart Daily

var daily = $("#chartDaily");

var chartTraffic = new Chart(daily, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "number of visitors",
            data: [75, 125, 100, 150, 200, 150, 175],
            borderColor: "#6539a4",
            backgroundColor: "#6539a4",
            borderWidth: 1
        }]
    },
    options: {
      layout: {
        padding: {
          top: 60,
        },
      },
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

// Chart Mobile

var mobile = $("#chartMobile");
var chartTraffic = new Chart(mobile, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [15, 10, 75],
            backgroundColor: ["red", "blue", "green"],
            borderWidth: 0
        }],
        labels: ["Phones", "Tablets", "Desktop"],
    },
    options: {
      layout: {
        padding: {
          top: 60,
        },
      },
      maintainAspectRatio: false,
      legend: {
        position: "bottom",
      }
        }
    })
;
