// Bell notifications
// $( ".bell").click(function() {
//   $(".alert").clone().appendTo(".top").attr("class", "alert-2").css("display", "flex");
//   $(".alert-2 .remove").attr("class", "remove-2");
//   $(".alert").clone().appendTo(".top").attr("class", "alert-3").css("display", "flex");
//   $(".alert-3 .remove").attr("class", "remove-3");
//   $( ".remove-2").click(function() {
//     $(".alert-2").hide();
//   })
//
//   $( ".remove-3").click(function() {
//     $(".alert-3").hide();
//   })
// })

// x remove button

$( ".remove").click(function() {
  $(".alert").hide();
})


// Chart Traffic Weekly

var traffic = $("#chartTraffic-weekly");



var chartTraffic = new Chart(traffic, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: "number of visitors weekly",
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

// Chart Traffic Daily

var trafficDaily = $("#chartTraffic-daily");



var chartTrafficDaily = new Chart(trafficDaily, {
    type: 'line',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "number of visitors daily",
            data: [75, 125, 100, 150, 200, 150, 175],
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

// Chart Traffic Hourly

var trafficHourly = $("#chartTraffic-hourly");



var chartTrafficHourly = new Chart(trafficHourly, {
    type: 'line',
    data: {
        labels: ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm"],
        datasets: [{
            label: "number of visitors hourly",
            data: [75, 125, 100, 150, 200, 150, 175, 75, 125, 100, 150, 200, 150, 175, 75, 125, 100, 150, 200, 150, 175, 75, 125, 100],
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

// Chart Traffic Monthly

var trafficMonthly = $("#chartTraffic-monthly");



var chartTrafficMonthly = new Chart(trafficMonthly, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "number of visitors monthly",
            data: [2000, 3500, 4000, 3750, 3500, 4500, 2250, 3000, 3150, 4250, 4750, 5000],
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
      responsive: true,
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
      responsive: true,
      legend: {
        position: "bottom",
      }
        }
    });

// Send buttons

$( "#user-send").click(function() {
  if ($("#user-search").val() && $("#user-message").val()) {
    alert("Your message has been sent.");
  } else {
    alert("You havent filled out all of the required fields.");
  }
})

// Traffic buttons

$("#time-hourly").click(function() {
  $(".wrapper-1").hide();
  $(".wrapper-3").hide();
  $(".wrapper-4").hide();
  $(".wrapper-2").show();
  $("#time-hourly").addClass("green-background");
  $("#time-daily").removeClass("green-background");
  $("#time-weekly").removeClass("green-background");
  $("#time-monthly").removeClass("green-background");
})

$("#time-daily").click(function() {
  $(".wrapper-1").hide();
  $(".wrapper-2").hide();
  $(".wrapper-4").hide();
  $(".wrapper-3").show();
  $("#time-hourly").removeClass("green-background");
  $("#time-daily").addClass("green-background");
  $("#time-weekly").removeClass("green-background");
  $("#time-monthly").removeClass("green-background");
})

$("#time-weekly").click(function() {
  $(".wrapper-2").hide();
  $(".wrapper-3").hide();
  $(".wrapper-4").hide();
  $(".wrapper-1").show();
  $("#time-hourly").removeClass("green-background");
  $("#time-daily").removeClass("green-background");
  $("#time-weekly").addClass("green-background");
  $("#time-monthly").removeClass("green-background");
})

$("#time-monthly").click(function() {
  $(".wrapper-1").hide();
  $(".wrapper-3").hide();
  $(".wrapper-2").hide();
  $(".wrapper-4").show();
  $("#time-hourly").removeClass("green-background");
  $("#time-daily").removeClass("green-background");
  $("#time-weekly").removeClass("green-background");
  $("#time-monthly").addClass("green-background");
})

// Autocomplete

const names = {
  data: ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"],
  list: {
		match: {
			enabled: true
		}
	}
};

$("#user-search").easyAutocomplete(names);

// Save Settings to local Storage

$("#save").click( function () {
  localStorage.setItem("timezone", $("#timezone").val());
  localStorage.setItem("check1", document.getElementById("myonoffswitch-1").checked);
  localStorage.setItem("check2", document.getElementById("myonoffswitch-2").checked);
  alert("Your settings have been saved.")
});

//First Checkbox

let checkBoolean1;

// Transforming localStorage string to boolean

if ( localStorage.getItem("check1") === "true") {
  checkBoolean1 = true;
} else {
  checkBoolean1 = false;
}

// On page load set the checkValue to the transformed getItem

document.getElementById("myonoffswitch-1").checked = checkBoolean1;

let checkBoolean2;

if ( localStorage.getItem("check2") === "true") {
  checkBoolean1 = true;
} else {
  checkBoolean1 = false;
}

document.getElementById("myonoffswitch-2").checked = checkBoolean1;

// Set the value of the dropdownmenu to the one saved during the click to the local Storage

$('#timezone').val(localStorage.getItem('timezone'));

// Bell notifications

$(".bell").click( function () {
  if ($(".dropdown-content").css("display") === "none") {
  $(".dropdown-content").show();
  $(".alert-notification").hide();
} else if ($(".dropdown-content").css("display") === "block") {
  $(".dropdown-content").hide();
}
});
