import ApexCharts from 'apexcharts';

const tfLineChart = (() => {
  const screenWidth = window.innerWidth;

  const chartBar1 = () => {
    const options1 = {
      series: [{ data: [20, 50, 7, 100, -8, 80, 100] }],
      colors: ['#D250FF'],
      chart: {
        type: 'line',
        maxWidth: 96,
        height: 26,
        sparkline: { enabled: true },
      },
      plotOptions: { bar: { columnWidth: '50%' } },
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 1,
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
    };

    const chart1 = new ApexCharts(document.querySelector('#line-chart-1'), options1);
    chart1.render();
  };

  const chartBar2 = () => {
    const options2 = {
      series: [{ data: [20, 50, 7, 100, -8, 80, 100] }],
      colors: ['#25C866'],
      chart: {
        type: 'line',
        maxWidth: 96,
        height: 26,
        sparkline: { enabled: true },
      },
      plotOptions: { bar: { columnWidth: '50%' } },
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 1,
      },
      tooltip: {
        enabled: false,
      },
      states: {
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
    };

    const chart2 = new ApexCharts(document.querySelector('#line-chart-2'), options2);
    chart2.render();
  };

  const chartBar3 = () => {
    const options3 = {
      series: [{ data: [5, 30, -20, 80, -50, 100, -80, 3, -20, 90] }],
      colors: ['#0082FE'],
      chart: {
        type: 'line',
        maxWidth: 96,
        height: 26,
        sparkline: { enabled: true },
      },
      plotOptions: { bar: { columnWidth: '50%' } },
      xaxis: { crosshairs: { width: 1 } },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        width: 1,
      },
      tooltip: {
        enabled: false,
      },
    };

    const chart3 = new ApexCharts(document.querySelector('#line-chart-3'), options3);
    chart3.render();
  };

  return {
    load: () => {
      chartBar1();
      chartBar2();
      chartBar3();
    },
  };
})();

export default tfLineChart;
