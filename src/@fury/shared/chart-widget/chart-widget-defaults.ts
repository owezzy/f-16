import { ChartOptions } from 'chart.js';

export const defaultChartOptions: ChartOptions = {
  responsive: true,
  animation: {
    duration: 0,
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      titleFont: {
        family: 'Roboto, \'Helvetica Neue\', Arial, sans-serif'
      },
      bodyFont: {
        family: 'Roboto, \'Helvetica Neue\', Arial, sans-serif'
      },
      footerFont: {
        family: 'Roboto, \'Helvetica Neue\', Arial, sans-serif'
      }
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
};
