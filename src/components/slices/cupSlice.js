import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cup: 0,
};

export const cupSlice = createSlice({
  name: 'cup',
  initialState,
  reducers: {
    getCup: (state, action) => {
      state.cup = action.payload;
    },
  },
});

export const { getCup } = cupSlice.actions;
export default cupSlice.reducer;
