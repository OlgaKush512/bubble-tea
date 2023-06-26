import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  font: 0,
};

export const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    getFont: (state, action) => {
      state.font = action.payload;
    },
  },
});

export const { getFont } = fontSlice.actions;
export default fontSlice.reducer;
