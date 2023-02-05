import { createSlice } from '@reduxjs/toolkit';

const sensorsDataSlice = createSlice({
  name: 'sensorsData',
  initialState: {
    temperature: [],
    average: [],
    soilHumidity: [],
  },
  reducers: {
    addTemperature(state, action) {
      state.temperature.push(...action.payload);
    },
    addSoilHumidity(state, action) {
      state.soilHumidity.push(...action.payload);
    },
    addAverage(state, action) {
      state.average.push(action.payload);
    },
  },
});

export const { addTemperature, addSoilHumidity, addAverage } = sensorsDataSlice.actions;
export default sensorsDataSlice.reducer;
