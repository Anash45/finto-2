function showPassword(event) {
    let target = event.currentTarget;
    var password = $(target).siblings('input');
    if (password.attr('type') === "password") {
        password.attr('type', "text");
        password.siblings('.ssp-eye-icon').addClass('slash');
    } else {
        password.attr('type', "password");
        password.siblings('.ssp-eye-icon').removeClass('slash');
    }
}

$(document).ready(function () {
    if ($('.carousel').length > 0) {
        $('.carousel').slick({
            centerMode: true,
            centerPadding: '500px', /* Adjust this to control how much of the side items are visible */
            slidesToShow: 1,
            variableWidth: true,
            focusOnSelect: true,
            autoplay: false, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            prevArrow: `<button type="button" class="slick-arrows slick-prev">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3306)">
<rect width="36" height="36" rx="18" transform="matrix(-1 0 0 1 56 20)" fill="white" shape-rendering="crispEdges"/>
<path d="M44.6666 38H31.3333M31.3333 38L36.3333 33M31.3333 38L36.3333 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3306" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3306"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3306" result="shape"/>
</filter>
</defs>
</svg>

    </button>`,
            nextArrow: `<button type="button" class="slick-arrows slick-next">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3308)">
<rect x="20" y="20" width="36" height="36" rx="18" fill="white" shape-rendering="crispEdges"/>
<path d="M31.3333 38H44.6666M44.6666 38L39.6666 33M44.6666 38L39.6666 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3308" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3308"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3308" result="shape"/>
</filter>
</defs>
</svg>

    </button>`,
            dots: false, // Hide navigation dots
            draggable: true, // Enable dragging
            infinite: true, // Infinite looping
            arrows: true, // Show arrows
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        variableWidth: false,
                        centerPadding: '0px', /* Adjust this to control how much of the side items are visible */
                    }
                }
            ]
        });
    }

    if ($('.groups-slider').length > 0) {
        $('.groups-slider').slick({
            variableWidth: true,
            autoplay: true, // Autoplay enabled
            autoplaySpeed: 2000, // Autoplay speed in milliseconds
            prevArrow: `<button type="button" class="slick-arrows slick-prev">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3306)">
<rect width="36" height="36" rx="18" transform="matrix(-1 0 0 1 56 20)" fill="white" shape-rendering="crispEdges"/>
<path d="M44.6666 38H31.3333M31.3333 38L36.3333 33M31.3333 38L36.3333 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3306" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3306"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3306" result="shape"/>
</filter>
</defs>
</svg>

    </button>`,
            nextArrow: `<button type="button" class="slick-arrows slick-next">
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_3308)">
<rect x="20" y="20" width="36" height="36" rx="18" fill="white" shape-rendering="crispEdges"/>
<path d="M31.3333 38H44.6666M44.6666 38L39.6666 33M44.6666 38L39.6666 43" stroke="#5F6368" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_1_3308" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3308"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3308" result="shape"/>
</filter>
</defs>
</svg>

    </button>`
        });
    }

    $('.more-info-btn').each(function () {

        $(this).click(function () {
            $(this).closest('.gt-match').toggleClass('expanded');
        });

    });
});

$(document).ready(function () {
    $('.pi-bar-chart').each(function () {
        // Data
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
        const values = [2.4, 5.7, 8.3, 3.9, 1.0, 6.9, 6.3, 7.4];

        // Determine the index of the lowest value
        const minIndex = values.indexOf(Math.min(...values));

        // Set colors for bars
        const barColors = values.map((value, index) =>
            index === minIndex ? "#FF2D55" : "#34C759"
        );

        // Create the chart for each canvas
        new Chart($(this), {
            type: "bar",
            data: {
                labels: months,
                datasets: [{
                    data: values,
                    backgroundColor: barColors,
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                scales: {
                    x: {
                        display: true,
                        ticks: {
                            display: false, // Hide x-axis ticks
                        },
                        grid: { display: false }
                    },
                    y: {
                        display: false, // Hide y-axis
                        grid: { display: false }
                    }
                },
                layout: {
                    padding: {
                        top: 20, // Space for months on top
                        bottom: 20 // Space for values at bottom
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
                animation: false
            },
            plugins: [{
                id: 'customLabels',
                afterDatasetsDraw: function (chart) {
                    const { ctx, data, chartArea: { top, bottom, left, right, width, height } } = chart;

                    // Draw months on top
                    data.labels.forEach((month, index) => {
                        const x = chart.scales.x.getPixelForTick(index);
                        ctx.fillStyle = "#000";
                        ctx.textAlign = "center";
                        ctx.font = "12px Arial";
                        ctx.fillText(month, x, top - 10);
                    });

                    // Draw numbers at the bottom
                    data.datasets[0].data.forEach((value, index) => {
                        const x = chart.scales.x.getPixelForTick(index);
                        const y = bottom + 20;
                        ctx.fillStyle = "#000";
                        ctx.textAlign = "center";
                        ctx.font = "12px Arial";
                        ctx.fillText(value, x, y);
                    });
                }
            }]
        });
    });

    $('.player-info-btn').each(function () {
        $(this).click(function () {
            $(this).closest('tr').toggleClass('pi-shown');
        });
    });

});

$(document).ready(function () {
    // Define the events
    var events = [
        {
            title: 'Event 1',
            start: '2024-12-20',
            url: 'https://example.com/event1'
        },
        {
            title: 'Event 2',
            start: '2024-12-22',
            url: 'https://example.com/event2'
        },
        {
            title: 'Event 3',
            start: '2024-12-25',
            url: 'https://example.com/event3'
        }
    ];
    // Initialize FullCalendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Month view
        firstDay: 1, // Start the week on Monday
        showNonCurrentDates: true, // Hide days from other months
        dayMaxEvents: true, // Limit events per day and avoid scrolling
        headerToolbar: {
            left: 'prev',
            center: 'title',
            right: 'next'
        },
        dayHeaderContent: function (args) {
            // Set day names to single letter
            return args.text.slice(0, 1);
        },
        events: events, // Attach events
        eventClick: function (info) {
            // Open event link in a new tab
            if (info.event.url) {
                info.jsEvent.preventDefault();
                window.open(info.event.url, '_blank');
            }
        },
        dayCellDidMount: function (info) {
            // Format info.date to YYYY-MM-DD in local time
            var cellDate = [
                info.date.getFullYear(),
                String(info.date.getMonth() + 1).padStart(2, '0'), // Month is 0-indexed
                String(info.date.getDate()).padStart(2, '0')
            ].join('-');

            // Check if the cell date matches any event start date
            var hasEvent = events.some(event => event.start === cellDate);

            // Add the class if there's an event on this date
            if (hasEvent) {
                info.el.classList.add('fc-day-event');
            }
        }
    });

    calendar.render();
});

function createUpDownChart() {
    const ctx = document.getElementById('chartCanvas').getContext('2d');

    // Generate 40 random data points
    const totalBars = 40;
    const topHalfCount = Math.floor(Math.random() * (totalBars - 1)) + 1; // Random number for top half
    const bottomHalfCount = totalBars - topHalfCount;

    // Create alternating data: green (positive) and purple (negative)
    const data = [];
    const colors = [];
    for (let i = 0; i < totalBars; i++) {
        if (i % 2 === 0) {
            data.push(Math.random() * 100); // Positive value for green bar
            colors.push('#34C759'); // Green
        } else {
            data.push(-(Math.random() * 100)); // Negative value for purple bar
            colors.push('#AF52DE'); // Purple
        }
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({ length: totalBars }, (_, i) => `Bar ${i + 1}`), // Labels for bars
            datasets: [{
                data: data,
                backgroundColor: colors,
                borderWidth: 0,
                borderColor: '#ccc'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }, // Hide legend
                tooltip: { enabled: false } // Hide tooltip
            },
            scales: {
                x: {
                    grid: { display: false }, // Remove x-axis grid lines
                    ticks: { display: false } // Remove x-axis labels
                },
                y: {
                    
                    grid: {
                        display: true, // Show horizontal grid lines
                        color: '#D7D7D7', // Light gray grid lines
                        lineWidth: 1, // Set grid line width
                        z: 0, // Ensure the grid lines are behind the chart
                    },
                     // Remove y-axis grid lines
                    beginAtZero: true, // Ensures zero is at the middle
                    ticks: { display: false } // Remove y-axis labels
                }
            }
        }
    });
}
function createStatsChart() {
    const ctx = document.getElementById('statsChart').getContext('2d');

    // Data for the last 12 years
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 12 }, (_, i) => currentYear - (9 - i)); // Last 12 years
    const data = Array.from({ length: 12 }, () => Math.floor(Math.random() * 101)); // Random data between 0 and 100

    // Calculate the maximum value from the data
    const maxDataValue = Math.max(...data);

    // Set the desired max height for the longest bar
    const maxBarHeight = 120; // px

    // Calculate the scaling factor
    const scalingFactor = maxBarHeight / maxDataValue;

    // Scale the data based on the scaling factor
    const scaledData = data.map(value => value * scalingFactor);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years, // X-axis labels: last 12 years
            datasets: [{
                data: scaledData, // Use scaled data for the bars
                backgroundColor: '#34C759', // Green color for bars
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }, // Hide legend
                tooltip: { enabled: false } // Hide tooltips
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 8,
                            family: 'Arial',
                            weight: 'normal',
                        },
                        color: 'rgba(0, 0, 0, 0.87)' // Label color
                    },
                    grid: { display: false } // Hide grid lines for x-axis
                },
                y: {
                    min: 0,
                    max: maxBarHeight, // Max height of the bars is now 120px
                    ticks: {
                        font: {
                            size: 8,
                            family: 'Arial',
                            weight: 'normal',
                        },
                        color: 'rgba(0, 0, 0, 0.87)', // Label color
                        stepSize: 30 // Y-axis range with steps: 0, 30, 60, 90
                    },
                    grid: { display: false } // Hide grid lines for y-axis
                }
            }
        }
    });
}


function createDonutChart() {
    const data = {
        labels: ['Legend 1', 'Legend 2', 'Legend 3'], // Labels for the sections
        datasets: [{
            label: 'My First Dataset',
            data: [50, 30, 20], // Values for each section
            backgroundColor: [
                '#34C759', // Green
                '#AF52DE', // Purple
                '#FF2D55'  // Red
            ],
            hoverOffset: 4 // Hover effect (slightly lift the section)
        }]
    };

    const ctx = document.getElementById('donutChartCanvas').getContext('2d');

    // Create donut chart
    const donutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            cutout: '30%',  // Adjust the overall size of the donut chart (larger = bigger donut)
            plugins: {
                tooltip: { enabled: true },  // Tooltips enabled
                legend: {
                    display: false,            // Disable default legend
                },
                datalabels: {
                    display: true,            // Display the data labels
                    color: '#fff',            // Color of the numbers (white)
                    font: {
                        size: 12,               // Font size for the data labels
                        weight: 'bold'          // Make the numbers bold
                    },
                    formatter: (value) => {
                        return value;           // Show the actual value inside each section
                    }
                }
            }
        }
    });

    // Generate the custom legend outside the canvas
    const customLegendContainer = document.getElementById('customLegend');
    const colors = data.datasets[0].backgroundColor;
    const labels = data.labels;

    // Clear any existing content in the custom legend container
    customLegendContainer.innerHTML = '';

    // Create the legend items dynamically
    labels.forEach((label, index) => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        // Create the color box
        const legendBox = document.createElement('div');
        legendBox.classList.add('legend-box');
        legendBox.style.backgroundColor = colors[index];

        // Create the label text
        const legendLabel = document.createElement('span');
        legendLabel.classList.add('legend-label');
        legendLabel.textContent = label;

        // Append the box and label to the legend item
        legendItem.appendChild(legendBox);
        legendItem.appendChild(legendLabel);

        // Append the legend item to the container
        customLegendContainer.appendChild(legendItem);
    });
}

function createComparisonChart() {
    const ctx = document.getElementById('comparisonChart').getContext('2d');

    // Sample data for two teams
    const team1Data = [12, 15, 10, 14, 13, 18, 15, 16, 17, 14, 19, 20, 18, 17, 16]; // Team 1 data
    const team2Data = [10, 12, 11, 13, 14, 16, 15, 14, 13, 14, 15, 16, 15, 14, 13]; // Team 2 data

    // X-axis labels (1 to 15)
    const xLabels = Array.from({ length: 15 }, (_, i) => i + 1);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels, // X-axis: 1 to 15
            datasets: [{
                label: 'Team 1',
                data: team1Data, // Team 1 data
                borderColor: '#34C759', // Green color for Team 1 line
                backgroundColor: 'transparent', // No fill
                borderWidth: 2,
                pointRadius: 0,
                pointBackgroundColor: '#34C759'
            }, {
                label: 'Team 2',
                data: team2Data, // Team 2 data
                borderColor: '#AF52DE', // Purple color for Team 2 line
                backgroundColor: 'transparent', // No fill
                borderWidth: 2,
                pointRadius: 0,
                pointBackgroundColor: '#AF52DE'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false, // Hide the default legend
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 8,
                            weight: 'normal',
                        },
                        color: 'rgba(0, 0, 0, 0.87)' // X-axis label color
                    },
                    grid: { display: false } // Hide x-axis grid lines
                },
                y: {
                    min: 1,
                    max: 20,
                    ticks: {
                        font: {
                            size: 8,
                            weight: 'normal',
                        },
                        color: 'rgba(0, 0, 0, 0.87)', // Y-axis label color
                        stepSize: 5 // Y-axis range with steps: 20, 15, 10, 5, 0
                    },
                    reverse: true,
                    grid: {
                        display: true, // Show horizontal grid lines
                        color: '#D7D7D7', // Light gray grid lines
                        lineWidth: 1, // Set grid line width
                        z: 0, // Ensure the grid lines are behind the chart
                    }
                }
            }
        }
    });

    // Custom Legend outside the chart
    const customLegendContainer = document.getElementById('customLegend2');
    const colors = ['#34C759', '#AF52DE']; // Team 1 and Team 2 colors
    const labels = ['Team 1', 'Team 2'];

    // Clear any existing content in the custom legend container
    customLegendContainer.innerHTML = '';

    // Create the legend items dynamically
    labels.forEach((label, index) => {
        const legendItem = document.createElement('div');
        legendItem.classList.add('legend-item');

        // Create the color box
        const legendBox = document.createElement('div');
        legendBox.classList.add('legend-box');
        legendBox.style.backgroundColor = colors[index];

        // Create the label text
        const legendLabel = document.createElement('span');
        legendLabel.classList.add('legend-label');
        legendLabel.textContent = label;

        // Append the box and label to the legend item
        legendItem.appendChild(legendBox);
        legendItem.appendChild(legendLabel);

        // Append the legend item to the container
        customLegendContainer.appendChild(legendItem);
    });
}
$(document).ready(function () {
    // Initialize chart
    createUpDownChart();
    createStatsChart();
    createComparisonChart();
    createDonutChart();
});