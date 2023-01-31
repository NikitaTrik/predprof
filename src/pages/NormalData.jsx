import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import MainTitle from '../components/MainTitle';
import Table from '../components/Table';
import useChartData from '../hooks/useChartData';

function NormalData() {
  const [selectedCategory, setSelectedCategory] = useState('');
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
            height: '437px',
            width: '49%',
            marginTop: '39px',
          }}>
          <Line options={temperatureChartData[0]} data={temperatureChartData[1]} />
        </div>
        <div
          style={{
            height: '437px',
            marginTop: '39px',
            width: '49%',
          }}>
          <Line options={humidityChartData[0]} data={humidityChartData[1]} />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
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
      <Table selectedCategory={selectedCategory} />
    </>
  );
}

export default NormalData;
