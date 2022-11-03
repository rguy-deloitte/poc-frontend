import React, { useState } from 'react';
import type { NextPage } from 'next'
import { H1, H2, Tabs } from 'govuk-react'
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
  const [activeTab, setActiveTab] = useState<string>('Graph');

  return (
    <>
      <H1>
        Dashboard
      </H1>
      <H2>
        Filters
      </H2>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-one-quarter">
          <label className="govuk-label" htmlFor="ddl1">Filter one</label>
          <select className="govuk-select" id="ddl1" name="ddl1">
            <option value="published">Please select</option>
          </select>
        </div>
        <div className="govuk-grid-column-one-quarter">
          <label className="govuk-label" htmlFor="ddl2">Filter two</label>
          <select className="govuk-select" id="ddl2" name="ddl2">
          <option value="published">Please select</option>
          </select>
        </div>
        <div className="govuk-grid-column-one-quarter">
          <label className="govuk-label" htmlFor="ddl3">Filter three</label>
          <select className="govuk-select" id="ddl3" name="ddl3">
          <option value="published">Please select</option>
          </select>
        </div>
        <div className="govuk-grid-column-one-quarter">
          <label className="govuk-label" htmlFor="ddl4">Filter four</label>
          <select className="govuk-select" id="ddl4" name="ddl4">
          <option value="published">Please select</option>
          </select>
        </div>
      </div>
      <H2>
        Activity
      </H2>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-full">
          <Tabs>
            <Tabs.List>
              <Tabs.Tab href="#Graph" onClick={(e) => {e.preventDefault(); setActiveTab('Graph');}} selected={activeTab === 'Graph'}>Graph</Tabs.Tab>
              <Tabs.Tab href="#Table" onClick={(e) => {e.preventDefault(); setActiveTab('Table');}} selected={activeTab === 'Table'}>Table</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="Graph" selected={activeTab === 'Graph'}>
              <Bar options={hBarOptions} data={hBarData} />
            </Tabs.Panel>
            <Tabs.Panel id="Table" selected={activeTab === 'Table'}>
              <table className="govuk-table">
                <thead className="govuk-table__head">
                  <tr className="govuk-table__row">
                    <th scope="col" className="govuk-table__header">Month</th>
                    <th scope="col" className="govuk-table__header">Dataset 1</th>
                    <th scope="col" className="govuk-table__header">Dataset 2</th>
                  </tr>
                </thead>
                <tbody className="govuk-table__body">
                  {hBarLabels.map((label, index) => <tr className="govuk-table__row">
                    <th scope="row" className="govuk-table__header">{label}</th>
                    <td className="govuk-table__cell">{hBarData.datasets[0].data[index]}</td>
                    <td className="govuk-table__cell">{hBarData.datasets[1].data[index]}</td>
                  </tr>)}
                </tbody>
              </table>
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
      <H2>
        Users
      </H2>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-one-half">
          <Bar options={stackedOptions} data={stackedData} />
        </div>
        <div className="govuk-grid-column-one-half">
        <Line options={areaOptions} data={areaData} />
        </div>
      </div>
      <H2>
        Cases
      </H2>
      <div className="govuk-grid-row govuk-!-padding-bottom-9">
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData1} />
          <table className="govuk-table govuk-!-margin-top-6">
            <caption className="govuk-table__caption govuk-table__caption--m">Case 1</caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">Red</th>
                <th scope="col" className="govuk-table__header">Blue</th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
              <td className="govuk-table__cell">12</td>
                <td className="govuk-table__cell">19</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData2} />
          <table className="govuk-table govuk-!-margin-top-6">
            <caption className="govuk-table__caption govuk-table__caption--m">Case 2</caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">Blue</th>
                <th scope="col" className="govuk-table__header">Yellow</th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
              <td className="govuk-table__cell">19</td>
                <td className="govuk-table__cell">3</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData3} />
          <table className="govuk-table govuk-!-margin-top-6">
            <caption className="govuk-table__caption govuk-table__caption--m">Case 3</caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">Yellow</th>
                <th scope="col" className="govuk-table__header">Green</th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
              <td className="govuk-table__cell">3</td>
                <td className="govuk-table__cell">5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="govuk-grid-column-one-quarter">
          <Doughnut data={DoughnutData4} />
          <table className="govuk-table govuk-!-margin-top-6">
            <caption className="govuk-table__caption govuk-table__caption--m">Case 4</caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">Green</th>
                <th scope="col" className="govuk-table__header">Purple</th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
              <td className="govuk-table__cell">5</td>
                <td className="govuk-table__cell">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Dashboard
