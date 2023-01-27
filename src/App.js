import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Manage from './pages/Manage';
import NormalData from './pages/NormalData';

import './scss/app.scss';
import { addTemperature } from './store/sensorsDataSlice';

function App() {
  const dispatch = useDispatch();
  let count = 0;
  setInterval(() => {
    fetch('https://dt.miet.ru/ppo_it/api/temp_hum/1')
      .then((response) => response.json())
      .then((data) => dispatch(addTemperature({ ...data, order: count })));
    fetch('https://dt.miet.ru/ppo_it/api/temp_hum/2')
      .then((response) => response.json())
      .then((data) => dispatch(addTemperature({ ...data, order: count })));
    fetch('https://dt.miet.ru/ppo_it/api/temp_hum/3')
      .then((response) => response.json())
      .then((data) => dispatch(addTemperature({ ...data, order: count })));
    fetch('https://dt.miet.ru/ppo_it/api/temp_hum/4')
      .then((response) => response.json())
      .then((data) => dispatch(addTemperature({ ...data, order: count })));
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
