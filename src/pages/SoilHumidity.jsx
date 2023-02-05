import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import CategoryButton from '../components/CategoryButton';
import MainTitle from '../components/MainTitle';
import Table from '../components/Table';
import useChartData from '../hooks/useChartData';

function SoilHumidity() {
  const [selectedCategory, setSelectedCategory] = useState('');
  let count = 0;
  const categories = ['1', '2', '3', '4', '5', '6'];
  const humidityDataset = useSelector((state) => state.sensorsData.soilHumidity).map((item) => {
    console.log(item);
    return {
      id: item.id,
      order: item.order,
      value: item.humidity,
    };
  });
  const humidityChartData = useChartData(humidityDataset, 6, 'soilHumidity');
  return (
    <>
      <MainTitle text="Влажность почвы" />

      <Line height={'437px'} width={'1510px'} updateMode={'active'} data={humidityChartData[1]} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '36px',
        }}>
        {categories.map((category) => {
          return (
            <CategoryButton
              type={'small'}
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

export default SoilHumidity;
