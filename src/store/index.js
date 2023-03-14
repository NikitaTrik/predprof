import { configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';
import sensorsDataSlice from './sensorsDataSlice';

export default configureStore({
  reducer: {
    sensorsData: sensorsDataSlice,
    devices: devicesSlice,
  },
});
