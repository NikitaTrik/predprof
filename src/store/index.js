import { configureStore } from '@reduxjs/toolkit';
import devicesSlice from './devicesSlice';
import sensorsDataSlice from './sensorsDataSlice';
import settingSlice from './settingSlice';

export default configureStore({
  reducer: {
    sensorsData: sensorsDataSlice,
    devices: devicesSlice,
    setting: settingSlice,
  },
});
