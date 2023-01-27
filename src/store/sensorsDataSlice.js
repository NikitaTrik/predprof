import { createSlice } from '@reduxjs/toolkit';

const sensorsDataSlice = createSlice({
  name: 'sensorsData',
  initialState: {
    temperature: [],
    soilHumidity: [],
  },
  reducers: {
    addTemperature(state, action) {
      state.temperature.push(action.payload);
    },
    addSoilHumidity(state, action) {
      state.soilHumidity.push(action.payload);
    },
  },
});

export const { addTemperature, addSoilHumidity } = sensorsDataSlice.actions;
export default sensorsDataSlice.reducer;
