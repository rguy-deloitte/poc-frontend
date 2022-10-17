import type { NextPage } from 'next'
import { H1 } from 'govuk-react'
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
);

const hBarOptions = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Horizontal Bar Chart',
    },
  },
};

const hBarLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const hBarData = {
  labels: hBarLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: hBarLabels.map(() => Math.floor(Math.random() * (1000 + 1000) - 1000)),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: hBarLabels.map(() => Math.floor(Math.random() * (1000 + 1000) - 1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const stackedOptions = {
  plugins: {
    title: {
      display: true,
      text: 'Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const stackedLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const stackedData = {
  labels: stackedLabels,
  datasets: [
    {
      label: 'Dataset 1',
      data: stackedLabels.map(() => Math.floor(Math.random() * (1000 + 1000) - 1000)),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: stackedLabels.map(() => Math.floor(Math.random() * (1000 + 1000) - 1000)),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Dataset 3',
      data: stackedLabels.map(() => Math.floor(Math.random() * (1000 + 1000) - 1000)),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

const areaOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Line Chart',
    },
  },
};

const areaLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const areaData = {
  labels: areaLabels,
  datasets: [
    {
      fill: true,
      label: 'Dataset',
      data: areaLabels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const DoughnutData1 = {
  labels: ['Red', 'Blue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutData2 = {
  labels: ['Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 3],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutData3 = {
  labels: ['Yellow', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [3, 5],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutData4 = {
  labels: ['Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [5, 2],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Dashboard: NextPage = () => {
  return (
    <>
      <H1>
        Dashboard
      </H1>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-full">
          <Bar options={hBarOptions} data={hBarData} />
        </div>
      </div>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-one-half">
          <Bar options={stackedOptions} data={stackedData} />
        </div>
        <div className="govuk-grid-column-one-half">
        <Line options={areaOptions} data={areaData} />
        </div>
      </div>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData1} />
        </div>
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData2} />
        </div>
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData3} />
        </div>
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData4} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
