import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import MainTitle from '../components/MainTitle';
import Table from '../components/Table';
import useChartData from '../hooks/useChartData';

function AverageData() {
  let count = 0;
  const averageTemperatureDataset = useSelector((state) => state.sensorsData.average).map(
    (item) => {
      return {
        id: item.order,
        order: item.order,
        value: item.temperature,
      };
    },
  );
  const averageHumidityDataset = useSelector((state) => state.sensorsData.average).map((item) => {
    return {
      id: item.order,
      order: item.order,
      value: item.humidity,
    };
  });
  const averageTemperatureChartData = useChartData(
    averageTemperatureDataset,
    1,
    'averageTemperature',
  );
  const averageHumidityChartData = useChartData(averageHumidityDataset, 1, 'averageHumidity');
  return (
    <>
      <MainTitle text="Средняя температура и влажность" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            height: '437px',
            width: '49%',
            marginTop: '39px',
          }}>
          <Line options={averageTemperatureChartData[0]} data={averageTemperatureChartData[1]} />
        </div>
        <div
          style={{
            height: '437px',
            marginTop: '39px',
            width: '49%',
          }}>
          <Line options={averageHumidityChartData[0]} data={averageHumidityChartData[1]} />
        </div>
      </div>
      <Table
        selectedCategory=""
        columns={['ID измерения', 'Средняя температура', 'Средняя влажность']}
        data={useSelector((state) => state.sensorsData.average).map((item) => {
          count += 3;
          return { id: item.order, ...item, count: [count, count + 1, count + 2] };
        })}
      />
    </>
  );
}

export default AverageData;
