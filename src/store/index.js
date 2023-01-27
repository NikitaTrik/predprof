import { configureStore } from '@reduxjs/toolkit';
import sensorsDataSlice from './sensorsDataSlice';

export default configureStore({
  reducer: {
    sensorsData: sensorsDataSlice,
  },
});
