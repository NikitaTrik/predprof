import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { receiveTemperatureData } from './dataReceiving';
import AverageData from './pages/AverageData';
import Manage from './pages/Manage';
import NormalData from './pages/NormalData';

import './scss/app.scss';
import { addAverage, addTemperature } from './store/sensorsDataSlice';

function App() {
  const dispatch = useDispatch();
  let count = 0;
  setInterval(() => {
    receiveTemperatureData().then((data) => {
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
      </Routes>
    </div>
  );
}

export default App;
