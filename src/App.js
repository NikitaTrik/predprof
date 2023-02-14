import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { receiveSoilHumidityData, receiveTemperatureData } from './dataReceiving';
import AverageData from './pages/AverageData';
import Manage from './pages/Manage';
import NormalData from './pages/NormalData';
import SoilHumidity from './pages/SoilHumidity';

import './scss/app.scss';
import { addAverage, addSoilHumidity, addTemperature } from './store/sensorsDataSlice';

function App() {
  const dispatch = useDispatch();
  let count = 0;
  setInterval(() => {
    receiveTemperatureData().then((data) => {
      console.log(data);
      dispatch(
        addAverage({
          temperature: (data.reduce((a, value) => a + value.temperature, 0) / 4).toFixed(2),
          humidity: (data.reduce((a, value) => a + value.humidity, 0) / 4).toFixed(2),
          order: count,
        }),
      );
      dispatch(
        addTemperature(
          data.map((item) => {
            return {
              ...item,
              order: count,
            };
          }),
        ),
      );

      receiveSoilHumidityData().then((data) => {
        console.log(data);
        dispatch(
          addSoilHumidity(
            data.map((item) => {
              return {
                ...item,
                order: count,
              };
            }),
          ),
        );
      });
    });
    count++;
  }, 10000);
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Manage />} />
        <Route path="/normalData" element={<NormalData />} />
        <Route path="/averageData" element={<AverageData />} />
        <Route path="/soilHumidity" element={<SoilHumidity />} />
      </Routes>
    </div>
  );
}

export default App;
