import { createSlice } from '@reduxjs/toolkit';

const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    settingValues: { averageTemp: '', averageHum: '', averageSoilHum: '' },
  },
  reducers: {
    addSettingValues(state, action) {
      state.settingValues = action.payload;
    },
  },
});

export const { addSettingValues } = settingSlice.actions;
export default settingSlice.reducer;
