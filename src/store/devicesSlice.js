import { createSlice } from '@reduxjs/toolkit';

const devicesSlice = createSlice({
  name: 'devices',
  initialState: {
    sash: false,
    hydration: false,
    watering: { 0: false, 1: false, 2: false, 3: false, 4: false, 5: false },
  },
  reducers: {
    changeSashState(state, action) {
      state.sash = action.payload;
    },
    changeHydrationState(state, action) {
      state.hydration = action.payload;
    },
    changeWateringState(state, action) {
      state.watering[action.payload.index] = action.payload.state;
    },
  },
});

export const { changeSashState, changeHydrationState, changeWateringState } = devicesSlice.actions;
export default devicesSlice.reducer;
