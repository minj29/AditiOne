import { Component, OnInit } from '@angular/core';
import { Chart }from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit{
ngOnInit(): void {
// Get the current date
const currentDate = new Date();

// Get the current month and year
const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const currentYear = currentDate.getFullYear();

// Calculate the number of days in the current month
const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

// Create an array to store the labels
const labels = [];

// Loop through the days of the month and generate labels
for (let day = 1; day <= daysInMonth; day++) {
  const formattedDate = `${day.toString().padStart(2, '0')}-${currentMonth.toString().padStart(2, '0')}`;
  labels.push(formattedDate);
}

// Now you can use the 'labels' array in your chart configuration
new Chart("myChart", {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Daily Logins',
      data: [12, 1, 3, 5, 2, 3, 2, 5, 5, 3, 5, 2, 3, 2, 7, 6, 3, 5, 2, 3, 2, 9, 4, 3, 5, 2, 3, 6, 2, 3, 2, 9],
      backgroundColor: [
        'rgba(0, 136, 137, 0.2)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {}
  }
});
}
}
