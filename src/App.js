import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { receiveTemperatureData } from './dataReceiving';
import Manage from './pages/Manage';
import NormalData from './pages/NormalData';

import './scss/app.scss';
import { addTemperature } from './store/sensorsDataSlice';

function App() {
  const dispatch = useDispatch();
  let count = 0;
  setInterval(() => {
    receiveTemperatureData().then((data) => {
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
      </Routes>
    </div>
  );
}

export default App;
