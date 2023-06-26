import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNight: false,
};

export const nightModeSlice = createSlice({
  name: 'night',
  initialState,
  reducers: {
    getNight: (state) => {
      if (state.isNight === true) {
        state.isNight = false;
      } else {
        state.isNight = true;
      }
    },
  },
});

export const { getNight } = nightModeSlice.actions;
export default nightModeSlice.reducer;
