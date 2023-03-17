import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import MainTitle from '../components/MainTitle';
import Table from '../components/Table';
import useChartData from '../hooks/useChartData';

function NormalData() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  let count = 0;
  const categories = ['1', '2', '3', '4'];
  const temperatureDataset = useSelector((state) => state.sensorsData.temperature).map((item) => {
    return {
      id: item.id,
      order: item.order,
      value: item.temperature,
    };
  });
  const humidityDataset = useSelector((state) => state.sensorsData.temperature).map((item) => {
    return {
      id: item.id,
      order: item.order,
      value: item.humidity,
    };
  });
  const temperatureChartData = useChartData(temperatureDataset, 4);
  const humidityChartData = useChartData(humidityDataset, 4);
  return (
    <>
      <MainTitle text="Температура и влажность" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            height: '369px',
            width: '49%',
            marginTop: '39px',
            marginBottom: '35px',
          }}>
          <Line options={temperatureChartData[0]} data={temperatureChartData[1]} />
        </div>
        <div
          style={{
            height: '369px',
            marginTop: '39px',
            width: '49%',
            marginBottom: '35px',
          }}>
          <Line options={humidityChartData[0]} data={humidityChartData[1]} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '1000px',
          margin: '0 auto',
        }}>
        {categories.map((category) => {
          return (
            <CategoryButton
              key={category}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              value={category}
            />
          );
        })}
      </div>
      <Table
        selectedCategory={selectedCategory}
        columns={['ID датчика', 'Температура', 'Влажность']}
        data={useSelector((state) => state.sensorsData.temperature).map((item) => {
          count += 3;
          return { ...item, count: [count, count + 1, count + 2] };
        })}
      />
    </>
  );
}

export default NormalData;
